const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log('Server started on port: ' + PORT);
});

if (process.env.NODE_ENV === 'production') {
  console.log('PRODUCTION');
  var staticPath = path.join(__dirname, '../../build');
  console.log(staticPath);
  app.use(express.static(staticPath));
}
