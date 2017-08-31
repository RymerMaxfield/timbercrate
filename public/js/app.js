angular.module('timbercrate', ['ui.router', 'ngMask']).config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html',
        })
        .state('products', {
            url: '/products',
            templateUrl: './views/products.html',
            controller: 'productCtrl'            
        })
});