const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

const DATABASE_URL = 'mongodb://localhost:27017/portfolio';

var db;
var blogposts;

exports.newBlogpost = (req, res) => {
  var obj = req.body;

  blogposts
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

  blogposts
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

exports.updateBlogpost = (req, res) => {
  var body = req.body,
    id = body.id,
    newTitle = body.newTitle;

  blogposts
    .updateOne(
      {
        _id: ObjectId(id)
      },
      {
        $set: { title: newTitle }
      }
    )
    .then(result => {
      console.log(result);
      if (result.matchedCount == 0) {
        res.status(410).send('no blogpost with that id found');
        return;
      }
      res.status(200).send(result);
    })
    .catch(error => {
      res.status(400).send(error);
    });
};

exports.getBlogposts = (req, res) => {
  blogposts
    .find() // No filters mean all blogposts. This returns a cursor
    .toArray() // Returns an array with all the documents for the cursor
    .then(result => {
      res.status(200).send(result);
    })
    .catch(error => {
      res.status(404).send(error);
    });
};

exports.getBlogpost = (req, res) => {
  var id = req.body.id;

  if (!id) {
    res.status(400).send('no id provided when trying to get blogpost');
    return;
  }

  blogposts
    .find({ _id: ObjectId(id) })
    .toArray()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(error => {
      res.status(404).send(error);
    });
};

exports.authenticate = (req, res) => {};

MongoClient.connect(DATABASE_URL, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;

  db = client.db('portfolio');
  blogposts = db.collection('blogposts');

  console.log('Connection to database established');
});
