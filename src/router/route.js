import angular from 'angular';
import oclazyload from 'oclazyload';
import uiRouter from 'angular-ui-router';
import layout from '@/views/layout';

const MODULE_NAME = 'route';

angular.module(MODULE_NAME, [uiRouter, oclazyload, layout])
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode(process.env.NODE_ENV === 'development');
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state('app', {
        abstract: true,
        template: '<layout/>'
        // resolve: {
        //   deps: ($ocLazyLoad) =>
        //     import ('@views/layout').then((module) => $ocLazyLoad.load({ name: module.default }))
        // }
      })
      .state('app.dashboard', {
        url: '/dashboard',
        template: '<div>dashboard</div>'
      })
      .state('app.dashboard2', {
        url: '/dashboard2',
        template: '<div>dashboard2</div>'
      })
      .state('404', {
        url: '/404',
        template: require('@/views/404.html')
        // templateProvider: function() {
        //   return` import ('@views/404.html');
        // }
      });
  });

// .run(($rootScope) => {
//   $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
//     console.log(unfoundState.to); // "lazy.state"
//     console.log(unfoundState.toParams); // {a:1, b:2}
//     console.log(unfoundState.options); // {inherit:false} + default options
//   });
// })

export default MODULE_NAME;