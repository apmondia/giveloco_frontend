'use strict';

var withTag = function() {
  return function(users, tag){
    console.debug("entered: ",users," ",tag);
    var results = [];
    angular.forEach(users, function (user) {
      var found_tag = (tag == null) || (tag == ""); //to match if tag is empty
      angular.forEach(user.tags, function (user_tag) {
        if (user_tag === tag) {
          found_tag = true;
        }
        console.debug("check user tag: ",user," ",user_tag," ",tag);
      });
      if (found_tag) {
        results.push(user);
      }
    });
    console.debug("returning: ", results);
    return results;
  };
};

withTag.$inject = [];
module.exports = withTag;
