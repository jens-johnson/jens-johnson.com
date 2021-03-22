# Website Creation Documentation

_Last modified: 3-21-21_

---
## Introduction
This document will (attempt) to capture how I created this project; capturing practices, patterns, learnings, etc.

## Initial Setup
1. Initialize a GitHub repo
   - Either from the GitHub UI or a CLI
2. Branch and start developing
3. I firstly initiated an npm project via:

   ```bash
   npm init
   ```
   
4. I then created four directories:
   1. `server/`: For the server-side code
   2. `client/`: For the client-side code
   3. `bin/`: For the executables (i.e. node script to run the application)
   4. `public/`: For the public bundled content to be rendered by Webpack
   
5. **Webpack**
   - To serve up the client-side code, I use webpack to bundle and compile everything.
   - I created a configuration file `webpack.config.js` at the root and installed `webpack`, `webpack-cli`, and `webpack-dev-server` as dependencies.
   - I added the following scripts to my `package.json`:
   
      `"start:dev": "webpack serve"`: Starts the webpack dev server
      
      `"build": "webpack"`: Creates a production build
      
      `"build:dev": "webpack --mode development"`: Creates a development build
      
   - Check out the [Webpack Configuration](#webpack-configuration) section for more information.

6. I created an HTML template for Webpack to render content using:

    ```html
    <!DOCTYPE html>
    <html lang="en">
        <div id="Anchor-Head"></div>
        <body>
            <div id="Anchor-Application">
            </div>
        </body>
    </html>
    ```

    - The `webpack-html-plugin` will render the application using this template.
    - The two anchors, `Anchor-Head` and `Anchor-Application` will specify where on the DOM to render React components.
       - `Anchor-Head` will be used to render the `<head>` component using `react-helmet`
       - `Anchor-Application` will be used to render the core application.

7. **Babel**
   - I created a `.babelrc` file at the root directory which contains the Babel configurations for the project.
   - See the [Babel Configuration](#babel-configuration) section for more

## Creating the Client-Side

- As noted in the [Webpack Configuration](#entry-point), the client-side code has an entry point of `client/index.js` for the application.
   - This means that the Webpack Bundler looks for `client/index.js` to compile and run the application.
   - The basic scaffolding of `client/index.js` is as follows:
   
      ```js
      import React, { Component } from 'react';
      import ReactDOM from 'react-dom';
      
      class Application extends Component {
          render() {
              return(
                  <h1>Hello, world!</h1>
              )
          }
      }
      
      ReactDOM.render(<Application />, document.getElementById('Anchor-Application'));
      ```
     
        - This does two things:
           1. Creates an `<Application />` component
           2. Renders that component at our specified anchor point on the DOM.
        
        - At this point, if we run `npm run start:dev`, we should see the following in our browser:
        
           ![hello, world](assets/images/hello_world.png)

## Webpack Configuration

#### Mode
The default mode for the webpack configuration, set using the environment:
```js
mode: process.env.ENVIRONMENT || 'development'
```

#### Entry Point
The entry point for the project, i.e. the core React app:
```js
entry: path.resolve(__dirname, 'client/index.js'),
```

#### Resolve
```js
resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            ['~']: path.resolve(__dirname, 'client')
        }
    }
```

- `resolve.extensions` resolves any js/jsx extensions, i.e. for module imports (`const foo = require('bar')` rather than `const foo = require('bar.js')`)
- `resolve.alias` sets an alias for a given namespace. In this case I wanted to use the tilda (`~`) to reference the root of the client directory

#### Module
##### Rules

- **JS/JSX Files**
   - `babel-loader` transpiles js/jsx to support backwards compatibility
```js
{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader'
    }
}
```

- **CSS Files**
   - `style-loader` and `css-loader` are used to inject css into the DOM
```js
{
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader'
    ]
}
```

- **SCSS/SASS Files**
   - `style-loader`, `css-loader`, and `sass-loader` are all used to compile and use SASS/SCSS files.
```js
{
    test: /\.s[ac]ss$/i,
    use: [
        'style-loader',
        'css-loader',
        'sass-loader'
    ]
}
```

- **HTML Files**
   - `html-loader` is used to compile HTML files.
```js
{
    test: /\.html$/,
    use: {
        loader: 'html-loader'
    }
}
```

- **Misc. Files (images, pdfs, etc.)**
   - `file-loader` is used to compiling and loading miscellaneous file types.
```js
{
    test: /\.(png|svg|jpg|gif|ico|pdf)$/,
    use: [
        'file-loader',
    ],
}
```

#### Plugins
- **`html-webpack-plugin`**
   - Creates a bundled HTML output of the application using the `public/index.html` output point.
```js
const htmlPlugIn = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public', 'index.html')
});
```

#### Performance
TODO

## Babel Configuration
#### Presets
```js
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

- `@babel/preset-env` helps with transpiling backwards-compatible js
- `@babel/preset-react` helps with transpiling React jsx to compatible js
