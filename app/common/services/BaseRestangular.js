
var BaseRestangular = function(Restangular, apiConfig) {

  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl(apiConfig.API.apiProxy);
  });

};

BaseRestangular.$inject = ['Restangular', 'apiConfig'];
module.exports = BaseRestangular;
