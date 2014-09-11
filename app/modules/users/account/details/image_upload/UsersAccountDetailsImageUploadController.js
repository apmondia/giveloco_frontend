/*jshint camelcase: false */
'use strict';

function UsersAccountDetailsImageUploadCtrl($rootScope, $scope, apiConfig, FileUploader, alertService, USER_EVENTS, $timeout, Restangular) {
	var user = $scope.currentUser;

    $scope.uploader = new FileUploader();
	$scope.removeItem = false;
	$scope.userImage = $rootScope.serverUrl + $scope.user.images.profile_picture.medium;

    $scope.deleteImage = function() {
        Restangular.one('users', user.id).customDELETE('delete_image');
    };

	var uploader = $scope.uploader = new FileUploader({
        url: apiConfig.API.paths.uploadImage,
        alias: 'profile_picture'
    });

    uploader.onSuccessItem = function() {
        alertService.showAlert(USER_EVENTS.imageUploadSuccess, 'alert-success');
    };
    uploader.onErrorItem = function() {
        alertService.showAlert(USER_EVENTS.imageUploadFailure, 'alert-danger');
    };
    uploader.onCompleteItem = function() {
    	$timeout(function() {
    		$scope.removeItem = true;
    	}, 300);
    };
}

UsersAccountDetailsImageUploadCtrl.$inject = ['$rootScope', '$scope', 'apiConfig', 'FileUploader', 'alertService', 'USER_EVENTS', '$timeout', 'Restangular'];
module.exports = UsersAccountDetailsImageUploadCtrl;