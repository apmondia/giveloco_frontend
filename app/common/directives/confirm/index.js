'use strict';

module.exports = angular.module('common.directives.confirm-modal', [])
  .directive('confirmModal', require('./confirm-modal-directive'))
  .controller('ConfirmModalController', require('./confirm-modal-controller'));
