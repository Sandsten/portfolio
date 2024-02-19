/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 * Modified by Staffan for React Usage
 */

import React from 'react';

export function isWebGLAvailable() {
  try {
    var canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

export function isWebGL2Available() {
  try {
    var canvas = document.createElement('canvas');
    return !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
  } catch (e) {
    return false;
  }
}

export function getWebGLErrorMessage() {
  return this.getErrorMessage(1);
}

export function getWebGL2ErrorMessage() {
  return this.getErrorMessage(2);
}

export function getErrorMessage(version) {
  var names = {
    1: 'WebGL',
    2: 'WebGL 2'
  };

  var contexts = {
    1: window.WebGLRenderingContext,
    2: window.WebGL2RenderingContext
  };

  var message = 'Your $0 does not seem to support ';
  var message2 = '$1';

  // var element = document.createElement('div');
  // element.id = 'webglmessage';

  var style = {
    fontFamily: 'monospace',
    fontSize: '13px',
    fontWeight: 'normal',
    textAlign: 'center',
    background: '#fff',
    color: '#000',
    padding: '1.5em',
    width: '400px',
    margin: '5em auto 0'
  };

  if (contexts[version]) {
    message = message.replace('$0', 'graphics card');
  } else {
    message = message.replace('$0', 'browser');
  }

  message2 = message2.replace('$1', names[version]);

  return (
    <div id="webglmessage" style={style}>
      {message}
      <a
        href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation"
        style={{ color: '#000' }}
      >
        {message2}
      </a>
    </div>
  );
}
