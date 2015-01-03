'use strict';

var userProfilePicture = function() {
  return {
    scope: {
      user: '='
    },
    restrict: 'A',
    template: require('./user-profile-picture.html'),
    link: function ($scope, elem, attrs) {
      $scope.hasDefaultImage = function (user) {
        return user.images.profile_picture.original.indexOf('default.png') >= 0;
      };
    }
  };
};

userProfilePicture.$inject = [];
module.exports = userProfilePicture;
