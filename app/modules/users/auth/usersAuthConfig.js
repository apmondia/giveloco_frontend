'use strict';

function userAuthRoutes($stateProvider) {

  var auth = {
      parent: 'user',
      name: 'auth',
      abstract: true,
      template: '<div class="module-view auth"><div ui-view></div></div>',
      controller: 'UsersAuthCtrl'
    },
    signup = {
      name: 'auth.signup',
      abstract: true,
      replace: true,
      url: '/signup',
      template: '<div class="registration container"><div ui-view></div></div>',
      controller: 'UsersAuthRegistrationCtrl',
      data: {
        moduleClasses: 'users auth',
        pageClasses: 'signup',
        pageTitle: 'Sign Up',
        pageDescription: 'User Registration.'
      }
    },
      signupIndividual = {
        name: 'auth.signup.individual',
        url: '',
        template: '<div users-auth-registration-individual></div>',
        data: {
          moduleClasses: 'users auth individual'
        }
      },
      signupCause = {
        name: 'auth.signup.cause',
        url: '/cause',
        template: '<div users-auth-registration-cause></div>',
        data: {
          moduleClasses: 'users auth cause'
        }
      },
      signupBusiness = {
        name: 'auth.signup.business',
        url: '/business',
        template: '<div users-auth-registration-business></div>',
        data: {
          moduleClasses: 'users auth business'
        }
      },
    login = {
      name: 'auth.login',
      url: '/login',
      template: '<div users-auth-login></div>',
      data: {
        moduleClasses: 'users auth',
        pageClasses: 'login',
        pageTitle: 'Sign In',
        pageDescription: 'Log into your account.'
      }
    },
    passwordReset = {
      name: 'auth.passwordReset',
      url: '/password-reset',
      template: '<div users-auth-password-reset></div>',
      data: {
        moduleClasses: 'users auth',
        pageClasses: 'password-reset',
        pageTitle: 'Reset Password',
        pageDescription: 'Reset your account password.'
      }
    };

  $stateProvider.state(auth);
  $stateProvider.state(signup);
  $stateProvider.state(signupIndividual);
  $stateProvider.state(signupCause);
  $stateProvider.state(signupBusiness);
  $stateProvider.state(login);
  $stateProvider.state(passwordReset);

}

userAuthRoutes.$inject = ['$stateProvider'];
module.exports = userAuthRoutes;