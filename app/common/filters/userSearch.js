'use strict';

var userSearch = function($filter) {
  return function(user_array, search_term){
    var withTag = $filter('withTag');
    var filter = $filter('filter');

    var withTagResult = withTag(user_array, search_term);
    var filterResult = _.filter(user_array, function (user) {
      return (user.company_name || "").indexOf(search_term) != -1 ||
              (user.summary || "").indexOf(search_term) != -1 ||
              (user.description || "").indexOf(search_term) != -1;
    });

    var result = _.union(withTagResult,filterResult);

    return result;
  };
};

userSearch.$inject = ['$filter'];
module.exports = userSearch;
