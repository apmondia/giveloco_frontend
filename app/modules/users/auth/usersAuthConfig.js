'use strict';

function userAuthRoutes($stateProvider) {

  var signup = {
      name: 'signup',
      abstract: true,
      url: '/user/signup',
      template: '<div users-auth-registration></div>',
      data: {
        moduleClasses: 'users auth',
        pageClasses: 'signup',
        pageTitle: 'Sign Up',
        pageDescription: 'User Registration.'
      }
  },
      signupDonor = {
        name: 'signup.donor',
        url: '',
        template: '<div users-auth-registration-donor></div>',
  },
      signupCause = {
        name: 'signup.cause',
        url: '/cause',
        template: '<div users-auth-registration-cause></div>',
  },
      signupBusiness = {
        name: 'signup.business',
        url: '/business',
        template: '<div users-auth-registration-business></div>',
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
$stateProvider.state(signupDonor);
$stateProvider.state(signupCause);
$stateProvider.state(signupBusiness);
$stateProvider.state(login);
$stateProvider.state(passwordReset);

}

userAuthRoutes.$inject = ['$stateProvider'];
module.exports = userAuthRoutes;