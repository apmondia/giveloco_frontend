'use strict';

var customCurrency = function($filter) {
	return function(amount, currencySymbol){
        var currency = $filter('currency');         

        if(amount < 0){
            return currency(amount, currencySymbol).replace('(', '-').replace(')', ''); 
        }

        return currency(amount, currencySymbol);
    };
};

customCurrency.$inject = ['$filter'];
module.exports = customCurrency;