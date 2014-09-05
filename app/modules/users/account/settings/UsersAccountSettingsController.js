/*jshint camelcase: false */
'use strict';

function UsersAccountSettingsCtrl($rootScope, $scope, $upload, apiConfig) {
	$scope.account = 'Basic User Account Settings goes here.';

	$scope.onFileSelect = function($files) {
		//$files: an array of files selected, each file has name, size, and type.
		for (var i = 0; i < $files.length; i++) {
			var file = $files[i];
			$scope.upload = $upload.upload({
				url: apiConfig.API.paths.currentUser,
				method: 'PUT',
				//headers: {'header-key': 'header-value'},
				//withCredentials: true,
				data: { user : { profile_picture: $scope.profilePicture } },
				file: file, // or list of files ($files) for html5 only
				fileName: 'profile_picture.jpg'
				// customize file formData name ('Content-Disposition'), server side file variable name. 
				//fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
				// customize how data is added to formData. See #40#issuecomment-28612000 for sample code
				//formDataAppender: function(formData, key, val){}
			}).progress(function(evt) {
				console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
			}).success(function(data, status, headers, config) {
				// file is uploaded successfully
				console.log(data);
			});
			//.error(...)
			//.then(success, error, progress); 
			// access or attach event listeners to the underlying XMLHttpRequest.
			//.xhr(function(xhr){xhr.upload.addEventListener(...)})
			}
		/* alternative way of uploading, send the file binary with the file's content-type.
		   Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed. 
		   It could also be used to monitor the progress of a normal http post/put request with large data*/
		// $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
	};
}

UsersAccountSettingsCtrl.$inject = ['$rootScope', '$scope', '$upload', 'apiConfig'];
module.exports = UsersAccountSettingsCtrl;