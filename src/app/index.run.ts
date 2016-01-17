///<reference path="../../.tmp/typings/angularjs/angular.d.ts"/>
module btcService {
    'use strict';

    export class RunBlock {
        /** @ngInject */
        constructor($rootScope:ng.IRootScopeService, $templateCache:ng.ITemplateCacheService) {
            $rootScope.$on('$routeChangeStart', function (event:any, next:any, current:any) {

                if (typeof(current) !== 'undefined') {

                    $templateCache.remove(current.templateUrl);
                }
            });
        }
    }
}
