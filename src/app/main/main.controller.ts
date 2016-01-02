module btcService {
    'use strict';

    export class MainController {

        static $inject = ['PropertiesService']

        frontEndUrl:string;
        backEndUrl:string;

        /* @ngInject */
        constructor(private props:PropertiesService) {
            this.frontEndUrl = props.getFrontEndUrl();
            this.backEndUrl = props.getBackEndUrl();
        }

    }
}
