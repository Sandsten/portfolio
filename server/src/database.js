const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const bcrypt = require('bcrypt');

const jwtUtilities = require('./jwtUtilities');
const SALTROUNDS = 12;

var db;
var blogposts;
var users;

// Sign in to the website using a username and password
exports.signIn = (req, res) => {
  const { username, password } = req.body;

  users.findOne({ username }).then(user => {
    if (user === null) {
      res.status(404).send('User not found');
    }
    bcrypt.compare(password, user.password, (err, correctPassword) => {
      if (err) throw err;
      if (correctPassword) {
        var token = jwtUtilities.createJWT(user);
        res
          .cookie('access-card', token, { httpOnly: true })
          .status(200)
          .send('Credentials accepted, welcome!');
        // res.status(200).send('Authenticated!');
      } else {
        res.status(401).send('Invalid password!');
      }
    });
  });
};

// Sign in to the website using a token
exports.signInWithToken = (req, res) => {
  var token = jwtUtilities.checkToken(req);

  if (token) {
    res.status(200).send(token);
  } else {
    res.status(404).send('No token for signing in');
  }
};

exports.createAccount = (req, res) => {
  const { username, password } = req.body;

  users
    .find()
    .count()
    .then(result => {
      if (result > 0) {
        console.log('There is already a user in the database. Maximum 1');
        res.status(404).send('There is already a user managing this site');
      } else {
        console.log('Good to go, creating account');
        // Hash password
        bcrypt.genSalt(SALTROUNDS, (err, salt) => {
          console.log('SALT GENERATED');
          bcrypt.hash(password, salt, (err, hash) => {
            // Create user
            console.log('Hashing completed');
            users
              .insertOne({
                username,
                password: hash
              })
              .then(result => {
                res.status(200).send('User created!');
              })
              .catch(error => {
                res.status(202).send('User creation failed');
              });
          });
        });
      }
    });
};

exports.getUser = (id, res) => {
  users.findOne({ _id: id }).then(user => {
    res.status(200).send(user);
  });
};

exports.addBlogpost = (req, res) => {
  var obj = req.body;

  console.log(req.user);

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
      console.log('Sending blogposts');
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

exports.purgeBlogposts = (req, res) => {
  blogposts
    .remove()
    .then(result => {
      console.log('PURGING!!!');
      res.status(200).send('Purge completed');
    })
    .catch(e => {
      res.status(404).send('Purge Failed');
    });
};

var DATABASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'mongodb://localhost:27017/portfolio'
    : `mongodb+srv://${process.env.DB_USER}:${
        process.env.DB_PASS
      }@cluster0-l6pm1.mongodb.net/test?retryWrites=true&w=majority`;

MongoClient.connect(DATABASE_URL, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;

  db = client.db('portfolio');
  blogposts = db.collection('blogposts');
  users = db.collection('users');

  console.log(
    `Connection to database established: ${process.env.NODE_ENV === 'development' ? 'Local server' : 'Mongo Atlas'}`
  );
});
