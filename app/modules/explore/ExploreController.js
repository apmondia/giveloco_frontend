'use strict';

function ExploreCtrl($scope, $stateParams) {

  $scope.allTags = function(user_array) {
      var tags = {};
      angular.forEach(user_array, function (user) {
          angular.forEach(user.tags, function(tag) {
            tags[tag] = true;
          });
      });
      var allTags = _.keys(tags);
      return allTags;
  };

  $scope.search = $stateParams.q;

}

ExploreCtrl.$inject = ['$scope', '$stateParams'];
module.exports = ExploreCtrl;
