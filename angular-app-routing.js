var mainAngular = angular.module('mainApp', ['ngRoute', 'ngAnimate']);

        mainAngular.config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/dashboard', {
                    templateUrl: 'dashboard.html'
                })
                .when('/your_smarthome', {
                    templateUrl: 'your_smarthome.html'
                })
                .when('/blackboard', {
                    templateUrl: 'blackboard.html'
                })
                .when('/stats', {
                    templateUrl: 'stats.html'
                })
                .when('/settings', {
                    templateUrl: 'Settings/settings.html'
                })
                .when('/settings/users', {
                    templateUrl: 'Settings/users.html'
                })
                .when('/settings/add_user', {
                    templateUrl: 'Settings/add_user.html'
                })
                .when('/settings/add_user2', {
                    templateUrl: 'Settings/add_user2.html'
                })
                .when('/settings/give_privileges',{
                    templateUrl: 'Settings/give_privileges.html'
                })
                .when('/settings/give_privileges_toilet',{
                    templateUrl: 'Settings/give_privileges_toilet.html'
                })
                .when('/settings/give_privileges_bulb',{
                    templateUrl: 'Settings/give_privileges_bulb.html'
                })
                .when('/settings/add_user_summary', {
                    templateUrl: 'Settings/add_user_summary.html'
                })
                .when('/settings/add_user_final', {
                    templateUrl: 'Settings/add_user_final.html'
                })
                .otherwise({
                    redirectTo: '/dashboard'
                });

            $locationProvider.hashPrefix('');

        });