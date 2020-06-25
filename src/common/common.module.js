(function() {
    'use strict';
    angular.module('common', [])
        .constant('APIBasePath', 'https://ghostruder05.herokuapp.com')
        .config(config);
    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }
})();
