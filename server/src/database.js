const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const bcrypt = require('bcrypt');

const jwtUtilities = require('./jwtUtilities');
const SALTROUNDS = 12;

const dockerSecret = require('./docker-secret-reader');

var db, blogposts, users, projects;

//////////////
/// User
//////////////

// Sign in to the website using a username and password
exports.signIn = (req, res) => {
	const { username, password } = req.body;

	users.findOne({ username }).then((user) => {
		if (user === null) {
			res.status(404).send('User not found');
		}
		bcrypt.compare(password, user.password, (err, correctPassword) => {
			if (err) throw err;
			if (correctPassword) {
				console.log('Correct password, admin signed in - sending back JWT');
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
		console.log('Signed in with token successfully');
		res.status(200).send(token);
	} else {
		console.log('Signin in with token failed, no token provided?');
		res.status(404).send('No token for signing in');
	}
};

exports.signOut = (req, res) => {
	console.log('Admin signing out. Deleting JWT from client');
	res.clearCookie('access-card').sendStatus(200);
};

exports.createAccount = (req, res) => {
	const { username, password } = req.body;

	console.log('\nAttempting to create a new admin account');
	console.log(username);

	users
		.find()
		.count()
		.then((result) => {
			if (result > 0) {
				console.log('There is already an admin for this website');
				res.status(404).send('Hej');
			} else {
				// Hash password
				bcrypt.genSalt(SALTROUNDS, (err, salt) => {
					bcrypt.hash(password, salt, (err, hash) => {
						// Create user
						console.log('Password hashed for maximum security');
						users
							.insertOne({
								username,
								password: hash,
							})
							.then((result) => {
								console.log('New admin account created successfully');
								res.status(200).send('Admin created successfully!');
							})
							.catch((error) => {
								console.log('Failed to upload new admin to database');
								res.status(202).send();
							});
					});
				});
			}
		});
};

exports.getUser = (id, res) => {
	users.findOne({ _id: id }).then((user) => {
		res.status(200).send(user);
	});
};

//////////////
/// Projects
//////////////

exports.getProjects = (req, res) => {
	projects
		.find()
		.sort({ order: 1 })
		.toArray()
		.then((projects) => {
			console.log('Sending projects to client');
			res.status(200).send(projects);
		})
		.catch((e) => {
			console.log('ERROR' + e);
			res.status(404).send(e);
		});
};

exports.getProject = (req, res) => {
	const { localURL } = req.query;
	projects
		.findOne({ localURL })
		.then((project) => {
			// Return it as an array with one element
			if (!project) res.status(200).send([]);
			// Send back an empty array instead of null
			else res.status(200).send([project]);
		})
		.catch((e) => {
			res.status(404).send(e);
		});
};

exports.updateProjectOrder = (req, res) => {
	var promises = [];

	req.body.projects.forEach((project, i) => {
		promises.push(
			projects
				.updateOne(
					{
						_id: ObjectId(project._id),
					},
					{
						$set: { order: i },
					}
				)
				.then((project) => {})
		);
	});

	Promise.all(promises)
		.then(() => {
			console.log('All projects updated');
			res.status(200).send('All projects updated');
		})
		.catch(() => {
			console.log('Failed to update projects');
			res.status(404).send('Failed to update projects');
		});
};

//////////////
/// Blog posts
//////////////

exports.addBlogpost = (req, res) => {
	var obj = req.body;

	console.log(req.user);

	blogposts
		.insertOne(obj)
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((error) => {
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
		.then((result) => {
			if (result.deletedCount == 0) {
				res.status(410).send('blogpost already deleted');
				return;
			}
			res.status(200).send(result);
		})
		.catch((error) => {
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
				_id: ObjectId(id),
			},
			{
				$set: { title: newTitle },
			}
		)
		.then((result) => {
			console.log(result);
			if (result.matchedCount == 0) {
				res.status(410).send('no blogpost with that id found');
				return;
			}
			res.status(200).send(result);
		})
		.catch((error) => {
			res.status(400).send(error);
		});
};

exports.getBlogpostsDisp = (req, res) => {
	// Do this in order to only return some fields from the documents
	// Such as a title and a short description etc
	// Only return everything when navigating to specific blogpost
	// blogposts.find({},{title:1, })
};

exports.getBlogposts = (req, res) => {
	blogposts
		.find() // No filters mean all blogposts. This returns a cursor
		.toArray() // Returns an array with all the documents for the cursor
		.then((result) => {
			console.log('Sending blogposts');
			res.status(200).send(result);
		})
		.catch((error) => {
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
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((error) => {
			res.status(404).send(error);
		});
};

exports.purgeBlogposts = (req, res) => {
	blogposts
		.remove()
		.then((result) => {
			console.log('PURGING!!!');
			res.status(200).send('Purge completed');
		})
		.catch((e) => {
			res.status(404).send('Purge Failed');
		});
};

// Pick if we are using live or local server
var DATABASE_URL;
if (process.env.NODE_ENV === 'development' && process.env.SERVER !== 'live') {
	DATABASE_URL = 'mongodb://localhost:27017/portfolio';
	console.log('Using LOCAL server');
} else {
	var username =
		dockerSecret.read(process.env.MONGODB_ATLAS_USERNAME_FILE) ||
		process.env.MONGODB_ATLAS_USERNAME;

	var password =
		dockerSecret.read(process.env.MONGODB_ATLAS_PASSWORD_FILE) ||
		process.env.MONGODB_ATLAS_PASSWORD;

	DATABASE_URL = `mongodb+srv://${username}:${password}@cluster0-l6pm1.mongodb.net/test?retryWrites=true&w=majority`;
	console.log('Using LIVE server');
}

MongoClient.connect(
	DATABASE_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, client) => {
		if (err) throw err;

		db = client.db('portfolio');
		blogposts = db.collection('blogposts');
		users = db.collection('users');
		projects = db.collection('projects');

		console.log(`Connection to database established!`);
	}
);
