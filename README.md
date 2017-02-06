# AngularJS + ES6 + Webpack Generator [![Build Status](https://secure.travis-ci.org/d3spis3d/generator-angular-es6-webpack.png?branch=master)](https://travis-ci.org/d3spis3d/generator-angular-es6-webpack)

> [Yeoman](http://yeoman.io) generator for AngularJS applications built with Webpack and Babel.js

More info on project structure [Angular + ES6 + Webpack blog post](http://d3spis3d.github.io/angular/webpack/2016/01/06/angular-es6-webpack.html)

## Usage

For information on using Yeoman check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

Install `yo` and `generator-angular-es6-webpack`:
```
npm install -g yo generator-angular-es6-webpack
```

Make a new directory for your application:
```
mkdir new-project && cd $_
```

Run the generator:
```
yo angular-es6-webpack
```

Follow the prompts to scaffold the application. Once finished run `gulp serve` to run Webpack's development server and `gulp build` to build minified bundle.

## Version Service

The `version-service` is generated at build time using the `VERSION` file and a portion of the git hash for the commit. As a result of being created by the build, it is recommended to run the `gulp build` at least once before attempting to run the tests or running the development server.

## License

[MIT](https://github.com/d3spis3d/generator-angular-es6-webpack/blob/master/LICENSE)
