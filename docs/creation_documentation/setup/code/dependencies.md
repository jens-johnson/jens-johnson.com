# Project Dependencies

**Last Updated: 2022-01-28**

The following is an in-depth overview of the dependencies listed in the project and their usages in development and 
production.

## Master List

- **`react`**ᴾ
   - Front-end web framework
- **`react-dom`**ᴾ
   - Virtual DOM for React
- **`express`**ᴾ
   - Node web application framework
- **`webpack`**ᴰ
   - Module bundler for front-end components
- **`webpack-cli`**ᴰ
   - CLI tools for webpack
- **`webpack-dev-server`**ᴰ
   - Development server for hot reloading of React code
- **`pino`**ᴾ
   - Node logging middleware
- **`express-pino-logger`**ᴾ
   - Express configuration for Pino
- **`html-webpack-plugin`**ᴰ
   - Simplifies creation of HTML files for Webpack
- **`html-loader`**ᴰ
   - For compiling/exporting html
- **`react-router-dom`**ᴰ
   - Front-end routing for React
- **`react-helmet`**ᴰ
   - HTML `head` component interface
- **`jquery`**ᴾ
   - Constants for js globals on application
- **`style-loader`**ᴰ
   - For using CSS in the DOM
- **`css-loader`**ᴰ
   - For using CSS in the DOM
- **`file-loader`**ᴰ
   - For loading/compiling miscellaneous file types
- **`bootstrap`**ᴾ
   - Front-end framework for responsive content
- **`nconf`**ᴾ
   - Environment configuration for NodeJS files
   
## Verbose
- **React**
    - **`react`**ᴾ
       - Front-end web framework
    - **`react-dom`**ᴾ
       - Virtual DOM for React
    - **`react-router-dom`**ᴰ
       - Front-end routing for React
    - **`react-helmet`**ᴰ
       - HTML `head` component interface
- **Express**
    - **`express`**ᴾ
       - Node web application framework
- **Webpack**
    - **General**
        - **`webpack`**ᴰ
           - Module bundler for front-end components
        - **`webpack-cli`**ᴰ
           - CLI tools for webpack
        - **`webpack-dev-server`**ᴰ
           - Development server for hot reloading of React code
    - **Plugins**
        - **`html-webpack-plugin`**ᴰ
           - Simplifies creation of HTML files for Webpack
    - **Babel**
        - **`@babel/core`**ᴰ
           - Babel core engine for transpiling/compiling JS
        - **`@babel/preset-env`**ᴰ
           - Babel configuration for compiling modern JS to ES5
        - **`@babel/preset-react`**ᴰ
           - Babel React configuration
        - **`babel-loader`**ᴰ
           - Babel webpack loader
    - **Loaders**
        - **`babel-loader`**ᴰ
           - Babel webpack loader
       - **`html-loader`**ᴰ
           - For compiling/exporting html
       - **`style-loader`**ᴰ
           - For using CSS in the DOM
       - **`css-loader`**ᴰ
           - For using CSS in the DOM
      - **`sass-loader`**ᴰ
          - For compiling SASS to CSS
       - **`file-loader`**ᴰ
           - For loading/compiling miscellaneous file types
- **Logging**
    - **Pino**
       - **`pino`**ᴾ
          - Node logging middleware
       - **`express-pino-logger`**ᴾ
          - Express configuration for Pino
- **Miscellaneous**
    - **`jquery`**ᴾ
       - Constants for js globals on application
    - **`bootstrap`**ᴾ
       - Front-end framework for responsive content 
    - **`node-sass`**ᴰ
       - Compiling sass to css
    - **`nconf`**ᴾ
       - Environment configuration for NodeJS files
