module btcService {
    'use strict';

    export interface IProperties {
        front_end_url:string;
        back_end_url:string;
    }

    declare var GLOBAL_PROPS:IProperties;

    export class PropertiesService {
        static $inject = [];

        getFrontEndUrl() {
            return GLOBAL_PROPS.front_end_url;
        }

        getBackEndUrl() {
            return GLOBAL_PROPS.back_end_url;
        }

    }

}
