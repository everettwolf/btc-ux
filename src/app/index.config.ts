/** @ngInject */
export function config($logProvider:angular.ILogProvider, toastrConfig:any) {
  // enable log
  $logProvider.debugEnabled(true);

}
