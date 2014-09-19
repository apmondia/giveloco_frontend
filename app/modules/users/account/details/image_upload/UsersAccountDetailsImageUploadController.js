/*jshint camelcase: false */
'use strict';

function UsersAccountDetailsImageUploadCtrl($rootScope, $scope, apiConfig, FileUploader, alertService, USER_EVENTS, $timeout, Auth) {
    $scope.uploader = new FileUploader();
	$scope.removeItem = false;
	$scope.userImage = $scope.user.images.profile_picture.medium;

	var uploader = $scope.uploader = new FileUploader({
        url: apiConfig.API.paths.uploadImage,
        alias: 'profile_picture'
    });

    uploader.onProgressItem = function() {
        $scope.showSpinner = true;
        alertService.showAlert(USER_EVENTS.imageUploadInProgress, 'alert-warning');
    };

    uploader.onSuccessItem = function() {
        $scope.showSpinner = false;
        alertService.showAlert(USER_EVENTS.imageUploadSuccess, 'alert-success');
        Auth.getCurrentUser().then(function(user) {
            $scope.userImage = user.images.profile_picture.medium;
        });
    };

    uploader.onErrorItem = function() {
        $scope.showSpinner = false;
        alertService.showAlert(USER_EVENTS.imageUploadFailure, 'alert-danger');
    };

    uploader.onCompleteItem = function() {
    	$timeout(function() {
    		$scope.removeItem = true;
    	}, 300);
    };
}

UsersAccountDetailsImageUploadCtrl.$inject = ['$rootScope', '$scope', 'apiConfig', 'FileUploader', 'alertService', 'USER_EVENTS', '$timeout', 'Auth'];
module.exports = UsersAccountDetailsImageUploadCtrl;