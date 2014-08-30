Webapp Boilerplate
==================

My ready-to-go boilerplate for new webapps.

[![Build Status](https://travis-ci.org/ChristianSch/webapp-boilerplate.svg?branch=master)](https://travis-ci.org/ChristianSch/webapp-boilerplate)
[![devDependency Status](https://david-dm.org/ChristianSch/webapp-boilerplate/dev-status.svg?branch=master)](https://david-dm.org/ChristianSch/webapp-boilerplate#info=devDependencies)

## Usage
Just pull it and start working.

## Development and technology
This boilerplate provides a simple webapp utilising angular.js, Modernizr.js bootstrap (via angular directives) HTML5 and sass. A simple testing environment ist already there.

### Developing
Before using install all dependencies: `npm install`. **Note:** A working node.js installation is needed. When you are done with your changes and ready to commit run `grunt beautify` that beautifies your js and `index.html`. Run `grunt watch` for live sass compilation and javascript syntax checks. To compile sass run `grunt sass:admin`.

### Testing
`npm run test` runs all tests by executing all files in  the `test` directory.

### Deploying
Once you are ready to create a deployable copy of this app just run `grunt deploy`. This will create a `.zip` archive in the `dist` directory containing all public available javascript-files and `index.html`. This copied version of your app wont need a working node.js installation. (For details see `Gruntfile.js`).

If you encounter something weird or a bug please issue a bugreport.