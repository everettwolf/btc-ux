/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />
/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="components/king/king.controller.ts" />
/// <reference path="components/sandbox/sandbox.controller.ts" />

module btcService {
    'use strict';

    angular.module('btcService', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ui.bootstrap'])
        .config(Config)
        .config(RouterConfig)
        .run(RunBlock)
        .controller('MainController', MainController)
        .controller('KingController', KingController);
}
