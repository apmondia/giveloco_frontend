# Giveloco Front End

The front end for the Giveloco app is built with AngularJS. Gulp is used for the development pipeline and Browserify is used for Modular Dependency Injection.

- https://angularjs.org/
- http://gulpjs.com/
- http://browserify.org/

To understand how this application is structured, have a look at the README for this github repository: https://github.com/goodbomb/angular-gulp-browserify-starter

###Setup

Clone this repository

```
git clone (repo)
```

Install the dependencies

```
npm install
bower install
```

And you're ready to go.

### Getting Started

The front end has three build tasks: build-test, build-dev and build-prod.  These tasks will compile the source, start a watch on the source files (except prod) and start a Node JS server to serve the assets.

The tasks use the test, development and production environments, respectively.

#### The Test Environment

```
gulp build-test
```

The front end will be served at:

```
http://localhost:6999/
```

And it will proxy back-end API requests to:

```
localhost:4999
```

#### The Development Environment

```
gulp build-dev
```

The front end will be served at:

```
http://localhost:3000
```

And it will proxy back-end API requests to:

```
localhost:5000
```

#### The Production Environment

```
gulp build-prod
```

The front end will be served at:

```
http://localhost:5050
```

And it will proxy back-end API requests to:

```
http://api.giveloco.com
```

### Committing Your Code

If you are going to deploy your code to production, you must first compile the assets using the ```gulp build-prod``` task.  This task will compile, concatenate and minify the SASS and JavaScript files.  Once you've compiled your production assets, commit them to the repository and push the new commit into production.
