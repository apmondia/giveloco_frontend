'use strict';

var FormValidation = function() {

	this.alphaNum = /^[a-z\d\-_\s]+$/i;
	this.alphaNumComma = /^[a-zA-Z0-9_,\-\s]*$/;
	this.alphaNumPeriod = /^[a-zA-Z0-9_.\-\s]*$/;
	this.emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	this.lettersOnly = /^[a-zA-Z]+$/;
	this.phoneRegex = /^\(?\+?\d?\)?\s?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
	this.postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
	this.textAreaRegex = /^([\w\d \-_.,;:!?"'@#$%&/\(\)]\s?)*$/;
	this.websiteRegex = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
	this.zipCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

	return this;
};

FormValidation.$inject = [];
module.exports = FormValidation;