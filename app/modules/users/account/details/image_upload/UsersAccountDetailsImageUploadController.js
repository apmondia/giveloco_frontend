/*jshint camelcase: false */
'use strict';

function UsersAccountDetailsImageUploadCtrl($rootScope, $scope, $cookies, apiConfig, FileUploader, alertService, USER_EVENTS, Auth) {

  $scope.uploader = new FileUploader({
    alias: 'profile_picture',
    queueLimit: 1,
    removeAfterUpload: true
  });

  $scope.uploader.onProgressItem = function() {
    $scope.showSpinner = true;
    alertService.showAlert(USER_EVENTS.imageUploadInProgress, 'alert-warning');
  };

  $scope.uploader.onSuccessItem = function() {
    $scope.showSpinner = false;
    alertService.showAlert(USER_EVENTS.imageUploadSuccess, 'alert-success');
    Auth.refreshCurrentUser();
  };

  $scope.uploader.onErrorItem = function(arg1, arg2) {
    $scope.showSpinner = false;
    alertService.showAlert(arg2.full_messages.join(' and '), 'alert-danger');
  };

  $scope.getUploader = function () {
    return $scope.uploader;
  };

  function setUser(user) {
    $scope.userImage = user.images.profile_picture.medium;
    var TOKEN = $cookies.auth_token.replace(/^"|"$/g, '');
    var uid = user.id;
    $scope.uploader.url = apiConfig.API.user.withID(user.id).uploadImage;
    $scope.uploader.headers = {
      'x-session-token' : TOKEN
    };
    $scope.uploader.formData = [{id: uid}];
  }

  $rootScope.$on('set-current-user', function (event, user) {
    setUser(user);
  });
  Auth.getCurrentUser(function (user) {
    setUser(user);
  });
}

UsersAccountDetailsImageUploadCtrl.$inject = ['$rootScope', '$scope', '$cookies', 'apiConfig', 'FileUploader', 'alertService', 'USER_EVENTS', 'Auth'];
module.exports = UsersAccountDetailsImageUploadCtrl;
