module btcService {
    'use strict';

    export class RunBlock {
        /** @ngInject */
        constructor($rootScope, $templateCache) {
            $rootScope.$on('$routeChangeStart', function (event, next, current) {
                console.log("F current", current);
                if (typeof(current) !== 'undefined') {
                    console.log("HKDJHFKDJFKDJFDKJDKFJDFKDJKDFJKJFD");
                    $templateCache.remove(current.templateUrl);
                }
            });
        }
    }
}
