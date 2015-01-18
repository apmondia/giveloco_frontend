'use strict';

function ExploreCtrl($scope) {

  $scope.allTags = function(user_array) {
      var tags = {};
      angular.forEach(user_array, function (user) {
          angular.forEach(user.tags, function(tag) {
            tags[tag] = true;
          });
      });
      var allTags = _.keys(tags);
      console.debug("allTags: ", allTags)
      return allTags;
  };

}

ExploreCtrl.$inject = ['$scope'];
module.exports = ExploreCtrl;
