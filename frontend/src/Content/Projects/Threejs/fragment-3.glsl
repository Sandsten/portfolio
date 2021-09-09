#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define MAX_STEPS 100
#define MAX_DIST 100.0
#define SURF_DIST 0.001

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform vec2 u_key_down;

void main() {
  vec2 screenCoord = gl_FragCoord.xy / u_resolution; // change range to [0, 1]
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) /
            u_resolution.y; // Move origin to the center of the screen and keep
                            // the ratio the same in both x and y

  float time = u_time * 0.05;
  uv *= mat2(cos(time), -sin(time), sin(time), cos(time));

  vec3 ro = vec3(0, 0, -1);           // Camera origin
  vec3 lookAt = vec3(0);              // Ray lookAt point
  float zoom = 0.5 + sin(time) * 0.1; // zoom level

  vec3 worldUp = vec3(0, 1, 0);

  vec3 forward = normalize(lookAt - ro);
  // Left handed system
  // Will be (1, 0, 0)
  vec3 right = normalize(cross(worldUp, forward));
  // Will be (0.7, 0.7, 0). Tilted forward slightly
  vec3 up = normalize(cross(forward, right));
  vec3 screenCenter = ro + forward * zoom;
  vec3 rayIntersection = screenCenter + right * uv.x + up * uv.y;
  vec3 rayDirection = normalize(rayIntersection - ro);

  float distanceToSurface, distanceFromOrigin;
  vec3 rayMarchPoint;

  float R = 1.0;
  float r = 0.6 + sin(time) * 0.21;
  vec3 color = vec3(0);
  float torusLargRadCenter;
  for (int i = 0; i < MAX_STEPS; i++) {
    // Calculate the new raymarching point
    rayMarchPoint = ro + rayDirection * distanceFromOrigin;

    // Distance to torus
    // Distance relative to torus outer radius center
    torusLargRadCenter = length(rayMarchPoint.xz) - R;
    distanceToSurface = length(vec2(torusLargRadCenter, rayMarchPoint.y)) - r;
    // Get distance to inside of torus instead of outside
    distanceToSurface *= -1.0;

    if (distanceToSurface < SURF_DIST || distanceToSurface > MAX_DIST)
      break;
    distanceFromOrigin += distanceToSurface;
  }

  if (distanceToSurface <= SURF_DIST) {
    // atan gives us an angle in the range of [-PI, PI]
    // atan(y,x)
    float x = atan(rayMarchPoint.x, rayMarchPoint.z);
    x += time * 0.1;
    float y = atan(torusLargRadCenter, rayMarchPoint.y);

    float bands = sin(y * 8.0 + x * 20.0); // [-1, 1]
    // Let ripples be equal to the bands function, multiply with 1 or 0
    // depending on where on the band we are to get stripe effect
    float ripples = sin(y * 100.0 + u_time * 10.0 + x * 0.0) * step(0.0, bands);

    float b1 = smoothstep(-.2, .2, bands);
    // bands - 0.5 moves the sine wave down. Everything above y=0 will be
    // thinner in that case
    float b2 = smoothstep(-.2, .2, bands - 0.4); // bands = [-1.5, .5]
    float b2Inv = 1.0 - b2;                      // Inverted b2

    float final = b1 * b2Inv; // !=0 when they overlap
    float final2 = (1.0 - final) * ripples;

    color += vec3(0, final + final2, 0);
    // color = vec3(ripples);
  }

  gl_FragColor = vec4(color, 1.0);
}