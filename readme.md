## What i want to do

- Create a **front-end** and **back-end** application as my portfolio
- I should be able to **add** projects, blogposts and so forth through my website
- All the data should be **stored on a server**
- I will be using **NodeJS as back-end**, **React as front-end** and **Webpack as bundler**.
- I want to be able to package front- and back-end separatly

## Transpiling JSX

Install the following packages:  
`npm i -D1 @babel/core @babel/preset-env @babel/preset-react @babel/preset-react babel-loader`

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

```javascript
// .babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
