module btcService {
     'use strict';

     export class RouterConfig {
          /** @ngInject */
          constructor($routeProvider:ng.route.IRouteProvider) {
               $routeProvider
                   .when('/', {
                        templateUrl: 'app/main/main.html',
                        controller: 'MainController',
                        controllerAs: 'main'
                   })
                   .when('/sandbox', {
                       templateUrl: 'app/components/sandbox/sandbox.html',
                       controller: 'SandboxController',
                       controllerAs: 'sandbox'
                   })
                   .when('/king', {
                       templateUrl: 'app/components/king/kingfeatures.html',
                       controller: 'KingController',
                       controllerAs: 'king'
                   })
                   .otherwise({
                        redirectTo: '/'
                   });
          }
     }
}
