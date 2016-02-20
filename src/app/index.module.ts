/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { KingController } from './components/king/king.controller';
import { SocialController } from './components/social/social.controller';

module btc {
  'use strict';

  angular.module('btc', ['ngResource', 'ngRoute', 'ui.bootstrap', 'toastr'])
      .config(config)
      .config(routerConfig)
      .run(runBlock)
      .controller('MainController', MainController)
      .controller('KingController', KingController)
      .controller('SocialController', SocialController);
}
