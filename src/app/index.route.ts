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
                .when('/kingcalendar', {
                    templateUrl: 'app/components/king/kingcalendar.html',
                    controller: 'KingController',
                    controllerAs: 'king'
                })
                .when('/kingcarousel', {
                    templateUrl: 'app/components/king/kingcarousel.html',
                    controller: 'KingController',
                    controllerAs: 'king'
                })
                .when('/social', {
                    templateUrl: 'app/components/social/social.html',
                    controller: 'SocialController',
                    controllerAs: 'social'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    }
}
