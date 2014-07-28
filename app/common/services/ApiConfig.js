'use strict';

var ApiConfig = function() {
	
/* =======================================================================
	Taliflo API Configuration
======================================================================= */
	var apiVersion = 'v1';
	this.API = {
		dev: 'http://localhost:3000/' + apiVersion + '/',
		prod: 'http://api.taliflo.com/' + apiVersion + '/'
	};

	return this;
};

ApiConfig.$inject = [];
module.exports = ApiConfig;