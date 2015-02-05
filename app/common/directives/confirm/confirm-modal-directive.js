'use strict';

module.exports = function ConfirmModalDirective() {
  return {
    controller: 'ConfirmModalController',
    template: require('./confirm-modal.html'),
    restrict: 'A',
    scope: {
      onConfirm: "&onConfirm",
      onCancel: "&onCancel"
    }
  };
};
