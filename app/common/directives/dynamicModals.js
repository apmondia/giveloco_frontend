'use strict';

function ModalDirective($modal) {
    return {
        restrict: 'A',
        compile: function compile(tElement) {
            var html = tElement.html();

            tElement.html('');

            return {
                pre: function preLink(scope, ele, attrs) {
                    var modalInstance,
                        defaultConfig = {template: html, scope: scope};

                    scope[attrs.modal] = {
                        open: function (config) {
                            if (modalInstance) { return; }
                            if (!config) { config = {}; }

                            _.assign(config, defaultConfig);
                            modalInstance = $modal.open(config);

                            modalInstance.result.then(
                                function () { modalInstance = null; },
                                function () { modalInstance = null; });

                            return modalInstance;
                        },

                        close: function (result) {
                            if (!modalInstance) { return; }

                            modalInstance.close(result);
                        },

                        dismiss: function (reason) {
                            if (!modalInstance) { return; }

                            modalInstance.dismiss(reason);
                        }
                    };
                }
            };
        }
    };
}

ModalDirective.$inject = ['$modal'];
module.exports = ModalDirective;