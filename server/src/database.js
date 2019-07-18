const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

const DATABASE_URL = 'mongodb://localhost:27017/portfolio';

let db;

exports.newBlogpost = (req, res) => {
  console.log(req.body);

  var obj = req.body;
  var col = db.collection('blogposts');

  col
    .insertOne(obj)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(301).send(error);
    });
};

exports.removeBlogpost = (req, res) => {
  var body = req.body;

  var id = body.id;

  if (!id) {
    res.status(400).send('no id provided when trying to remove blogpost');
    return;
  }

  var col = db.collection('blogposts');
  col
    .deleteOne({ _id: ObjectId(id) })
    .then(result => {
      if (result.deletedCount == 0) {
        res.status(410).send('blogpost already deleted');
        return;
      }
      res.status(200).send(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
};

exports.editBlogpost = (req, res) => {};

exports.getBlogposts = (req, res) => {};

exports.getBlogpost = (req, res) => {};

exports.authenticate = (req, res) => {};

MongoClient.connect(DATABASE_URL, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;

  db = client.db('portfolio');

  console.log('Connection to database established');
});
