## TODO

- ~~Front end should be responsive.~~
- ~~Dark and light color theme option.~~
- ~~Sign in to website as admin~~
- ~~Authorize certain api calls with JWT~~
- **add**/**update** projects, blogposts and so forth through my website.
- All the data should be stored on **Atlas**.
- Integrated CV, not just a PDF.

## Goal

- Create a **front-end** and **back-end** application as my portfolio
- To use **NodeJS with MongoDB as back-end**, **React as front-end**, **Webpack as bundler** and host it on **Heroku**

## Transpiling JSX

Install the following packages:  
`npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-react babel-loader`

- "@babel/core": needed for babel-loader to work
- "@babel/preset-env": some magic thing that makes our life easier?
- "@babel/preset-react": transpiler for JSX syntax
- "babel-loader": the webpack loader itself

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
```

The following has to be included in webpack.config in order to avoid  
error when routing. Error that occurs otherwise is of type MIME type ('text/html')

```javascript
output: {
   path: path.join(__dirname, 'public'),
   filename: '[name].js',
   publicPath: '/', <--------
}
```

```javascript
// .babelrc
{
  "plugins": ["@babel/plugin-proposal-class-properties"],
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## Mongo db

```bash
# Connect to Atlas with shell
> mongo "mongodb+srv://cluster0-l6pm1.mongodb.net/test" --username <username>

# Create collection
> db.createCollection("<collectionName>");

# Insert array of objects
> db.<collectionName>.insertMany([{},{},{},....]);
```
