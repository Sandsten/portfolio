const moment = require('moment');
const jwt = require('jwt-simple');

//TODO: Create environment variable
const SECRET = 'POTATIS FARMARNA';

exports.checkToken = (req, res, next) => {
  // The token will be sent through a cookie
  var token = req.cookies['access-card'];

  try {
    var decoded = jwt.decode(token, SECRET);
    req.user = decoded; // Pass along the user data
    console.log('Token Accepted!');
  } catch (error) {
    // If decoding of JWT fails. return unauthorized and don't continue by calling return instead of next()
    console.log('Token Invalid!');
    res.status(404).send('Unautorized');
    return;
  }

  next();
};

exports.createJWT = user => {
  // Create JWT here and send it back to the user!
  var expires = moment()
    .add(7, 'days')
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
