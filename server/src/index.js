const express = require('express');
const path = require('path');
const databse = require('./database');
// const server = require('./server');
const config = require('./headerConfig');

const PORT = process.env.PORT || 3001;
const app = express();

// To be abele to parse API requests with body variables
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(config.headerConfig);

// Create a specific router with the prefix /api to use with all api requests
const router = express.Router();
app.use('/api', router);
// No authentication
router.get('/get-blogposts', databse.getBlogposts);
router.get('/get-blogpost/:id', databse.getBlogpost);
// With authentication
router.post('/add-blogpost', databse.newBlogpost);
router.delete('/remove-blogpost', databse.removeBlogpost);
//TODO: remove blogpost
//TODO: edit blogpost

//? GET     - Get data
//? POST    - Create data
//? DELETE  - Delete data
//? PUT     - Update data

// Serve static front-end content when in production
if (process.env.NODE_ENV === 'production') {
  console.log('PRODUCTION MODE ENGAGED');
  var staticPath = path.join(__dirname, '../../build');
  console.log(staticPath);
  app.use(express.static(staticPath));
}

app.listen(PORT, () => {
  console.log('Server started on port: ' + PORT + ' :D');
});
