'use strict';

function UsersAccountProfileViewCtrl($rootScope, $scope) {

// =======================================================================
//	Convert tags array into a string for presentation
// =======================================================================
	// Function to properly display tags on state change
	$scope.tagList = function(user) {
		if (user && user.tags.length !== 0) {
			// if tagsList is an array
			if (user.tags[0].text === undefined) {
				return user.tags.join(', ');
			} else {
			// if tagsList is an object
				var tagsArray = [];
				for (var i=0; i < user.tags.length; i++) {
					tagsArray.push(user.tags[i].text);
				}
				return tagsArray.join(', ');
			}
		} else {
			// if tagList is empty
			return '';
		}
	};
}

UsersAccountProfileViewCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountProfileViewCtrl;
