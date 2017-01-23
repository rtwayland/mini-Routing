angular.module('miniRouting', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'js/home/homeTmpl.html',
                controller: 'HomeController'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'js/settings/settingsTmpl.html',
                controller: 'SettingsController'
            })
            .state('products', {
                url: '/products/:id',
                templateUrl: 'js/products/productTmpl.html',
                controller: 'ProductsController'
            })

    });
