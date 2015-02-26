'use strict';

angular.module('choupouxMemo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('board', {
        url: '/board',
        templateUrl: 'app/board/board.html',
        controller: 'BoardCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
