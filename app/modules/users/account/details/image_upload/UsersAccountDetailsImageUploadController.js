/*jshint camelcase: false */
'use strict';

function UsersAccountDetailsImageUploadCtrl($rootScope, $scope, $cookies, apiConfig, FileUploader, alertService, USER_EVENTS, Auth) {
    $scope.uploader = new FileUploader();
	$scope.userImage = $scope.user.images.profile_picture.medium;

    var TOKEN = $cookies.auth_token.replace(/^"|"$/g, '');
    var uid = $scope.currentUser.id;

	var uploader = $scope.uploader = new FileUploader({
        url: apiConfig.API.user.uploadImage,
        alias: 'profile_picture',
        queueLimit: 1,
        removeAfterUpload: true,
        headers: {
            'x-session-token' : TOKEN
        },
        formData: [{id: uid}]
    });

    uploader.onProgressItem = function() {
        $scope.showSpinner = true;
        alertService.showAlert(USER_EVENTS.imageUploadInProgress, 'alert-warning');
    };

    uploader.onSuccessItem = function() {
        $scope.showSpinner = false;
        alertService.showAlert(USER_EVENTS.imageUploadSuccess, 'alert-success');
        Auth.refreshCurrentUser().then(function(user) {
            $scope.userImage = user.images.profile_picture.medium;
            return;
        });
    };

    uploader.onErrorItem = function() {
        $scope.showSpinner = false;
        alertService.showAlert(USER_EVENTS.imageUploadFailure, 'alert-danger');
    };
}

UsersAccountDetailsImageUploadCtrl.$inject = ['$rootScope', '$scope', '$cookies', 'apiConfig', 'FileUploader', 'alertService', 'USER_EVENTS', 'Auth'];
module.exports = UsersAccountDetailsImageUploadCtrl;
