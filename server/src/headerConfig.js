exports.headerConfig = (req, res, next) => {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  // FOR PRODUCTION
  res.header('Access-Control-Allow-Origin', 'https://staffansandberg.xyz');
  // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  // FOR DEVELOPMENT
  // console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  // This is for being able to use 'withCredentials: true', which is used for storing the token cookie in the browser
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};
