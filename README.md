# Taliflo Front End

The front end for the Taliflo app is built with AngularJS. Gulp is used for the development pipeline and Browserify is used for Modular Dependency Injection.

- https://angularjs.org/
- http://gulpjs.com/
- http://browserify.org/

To understand how this application is structured, have a look at the README for this github repository: https://github.com/goodbomb/angular-gulp-browserify-starter

###Instructions

1) Node Modules and Bower Components are not included in this repository by default. After cloning or pulling changes from this repository, always make sure to run the following commands in terminal to ensure that you have all of the necessary package dependencies:

```npm install``` and ```bower install```

2) Once everything is installed all you have to do is navigate to this folder on your computer in terminal and run ```gulp```. Your new server will be running at ```http://localhost:5000```.

###Application Modules
The following is the file structure found inside of ```app/modules```
```
Home Page

Static Pages
——— About Page (how it works)
——— Privacy Policy
——— Terms of Service

Explore
——— Causes (grid)
——— Businesses (grid)

Forms
——— Donate
——— Pledge
——— Claim Vouchers
——— Redeem Vouchers

Users
——— Auth
—————— Registration
—————— Login
——— Account
—————— Vouchers List
—————— Transaction History (Account History)
—————— Basic Info
——— Profile
—————— Cause
—————— Business
————————— Vouchers List
```
