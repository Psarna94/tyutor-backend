'use strict';

angular.module('backendApp.auth', ['backendApp.constants', 'backendApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
