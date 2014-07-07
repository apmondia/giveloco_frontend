'use strict';

function userAuthRoutes($stateProvider) {

  var signup = {
      name: 'signup',
      url: '/user/signup',
      template: '<div users-auth-registration></div>',
      data: {
        moduleClasses: 'users auth',
        pageClasses: 'signup',
        pageTitle: 'Sign Up',
        pageDescription: 'User Registration.'
      }
  },
      signupOrg = { // Nested View for Signing up Businesses and Causes
          name: 'signup.org',
          url: '/organization',
          parent: signup
  },
  login = {
      name: 'login',
      url: '/user/login',
      template: '<div users-auth-login></div>',
      data: {
        moduleClasses: 'users auth',
        pageClasses: 'login',
        pageTitle: 'Sign In',
        pageDescription: 'Log into your account.'
      }
  },
  passwordReset = {
      name: 'passwordReset',
      url: '/user/password-reset',
      template: '<div users-auth-password-reset></div>',
      data: {
        moduleClasses: 'users auth',
        pageClasses: 'password-reset',
        pageTitle: 'Reset Password',
        pageDescription: 'Reset your account password.'
      }
  };

$stateProvider.state(signup);
$stateProvider.state(signupOrg);
$stateProvider.state(login);
$stateProvider.state(passwordReset);

}

userAuthRoutes.$inject = ['$stateProvider'];
module.exports = userAuthRoutes;