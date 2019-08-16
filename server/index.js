const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const history = require("connect-history-api-fallback");

// Allows us read .env variables from process.env.
require("dotenv").config();

const databse = require("./src/database");
const config = require("./src/headerConfig");
const jwtUtilities = require("./src/jwtUtilities");

const PORT = process.env.PORT || 3001;
const app = express();

// To be abele to parse API requests with body variables
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Fixes the Cannot GET error when refreshing on a path
app.use(history());

app.use(config.headerConfig);

// Account handling
app.post("/sign-in", databse.signIn);
app.post("/auto-signin", databse.signInWithToken);
app.post("/create-account", databse.createAccount);
app.post("/valid-token", databse.signInWithToken);

// Create a specific router with the prefix /api to use with all api requests
const router = express.Router();
app.use("/api", router);
// No authentication required
router.get("/get-projects", databse.getProjects);
router.get("/get-project", databse.getProject);
router.get("/get-blogposts", databse.getBlogposts);
router.get("/get-blogpost", databse.getBlogpost);

//! These api requests require authentication! use checkToken middleware
//router.use(jwtUtilities.checkToken); //? This doesn't work for some reason
router.put("/update-project-order", jwtUtilities.authorizeAPICall, databse.updateProjectOrder);
router.post("/add-blogpost", jwtUtilities.authorizeAPICall, databse.addBlogpost);
router.put("/update-blogpost", jwtUtilities.authorizeAPICall, databse.updateBlogpost);
router.delete("/remove-blogpost", jwtUtilities.authorizeAPICall, databse.removeBlogpost);
router.delete("/purge-blogposts", jwtUtilities.authorizeAPICall, databse.purgeBlogposts);

//? GET     - Get data
//? POST    - Create data
//? DELETE  - Delete data
//? PUT     - Update data

// Serve static front-end content when in production
if (process.env.NODE_ENV === "production") {
  console.log("PRODUCTION MODE ENGAGED");
  var staticPath = path.join(__dirname, "./build");
  console.log(staticPath);
  app.use(express.static(staticPath));
} else {
  console.log("DEV MODE ENGAGED!");
}

app.listen(PORT, () => {
  console.log("Server started on port: " + PORT + " :D");
});
