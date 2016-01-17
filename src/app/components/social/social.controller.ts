module btcService {
    'use strict';

    export class SocialController {
        static $inject = ['$window', '$routeParams', '$location']

        constructor(private $window:any, private $routeParams:any, private $location:any) {
            console.log('Route Params:', this.$routeParams);
            console.log('Route Params Foo:', this.$routeParams.redir);
            console.log('Path:', this.$location.search());
            // console.log("search:", this.$search);
            if (this.$routeParams.redir) {
                this.$window.location.href = this.$routeParams.foo;
            } else {
                this.$window.location.href = 'http://beyondthecomics.com';
            }

        }

    }
}
