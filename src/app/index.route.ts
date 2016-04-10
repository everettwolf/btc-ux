/** @ngInject */
export function routerConfig($routeProvider:angular.route.IRouteProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
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
        .when('/kingcomix', {
            templateUrl: 'app/components/king/kingcomix.html',
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
