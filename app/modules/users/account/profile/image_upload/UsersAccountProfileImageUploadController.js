/*jshint camelcase: false */
'use strict';

function UsersAccountProfileImageUploadCtrl($rootScope, $scope, $cookies, apiConfig, FileUploader, alertService, USER_EVENTS, Auth) {

  $scope.uploader = new FileUploader({
    alias: 'profile_picture',
    queueLimit: 1,
    removeAfterUpload: true
  });

  $scope.uploader.onProgressItem = function(arg1, arg2) {
    $scope.showSpinner = true;
    alertService.showAlert(USER_EVENTS.imageUploadInProgress, 'alert-warning');
  };

  $scope.uploader.onSuccessItem = function(arg1, arg2) {
    $scope.showSpinner = false;
    alertService.showAlert(USER_EVENTS.imageUploadSuccess, 'alert-success');
    $scope.$emit('refresh-profile-user');
    $scope.$emit('refresh-all-users');
  };

  $scope.uploader.onErrorItem = function(arg1, arg2) {
    $scope.showSpinner = false;
    alertService.showAlert(arg2, 'alert-danger');
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

  $scope.$on('set-profile-user', function (event, user) {
    setUser(user);
  });
  if ($scope.user && $scope.user.images) {
    setUser($scope.user);
  }
}

UsersAccountProfileImageUploadCtrl.$inject = ['$rootScope', '$scope', '$cookies', 'apiConfig', 'FileUploader', 'alertService', 'USER_EVENTS', 'Auth'];
module.exports = UsersAccountProfileImageUploadCtrl;
