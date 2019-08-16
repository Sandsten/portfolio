const moment = require("moment");
const jwt = require("jwt-simple");

const SECRET = process.env.JWT_SECRET;

// Middleware for checking if a valid JWT was passed with the api request
exports.authorizeAPICall = (req, res, next) => {
  // The token will be sent through a cookie
  var tokenData = this.checkToken(req);

  if (tokenData) {
    req.user = tokenData;
  } else {
    res.status(404).send("Unauthorized");
    return false;
  }

  next();
};

// Checks if a JWT is present in the request
// Returns the decoded data if it exists, otherwise false
exports.checkToken = req => {
  var token = req.cookies["access-card"];

  try {
    var decoded = jwt.decode(token, SECRET);
    return decoded;
  } catch (error) {
    // If decoding of JWT fails. return unauthorized and don't continue by calling return instead of next()
    return false;
  }
};

// Generates a JWT and returns it
exports.createJWT = user => {
  // Create JWT here and send it back to the user!
  var expires = moment()
    .add(7, "days")
    .valueOf();

  var token = jwt.encode(
    {
      _id: user._id,
      exp: expires
    },
    SECRET
  );

  return token;
};
