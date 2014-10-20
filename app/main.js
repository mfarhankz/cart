(function(){
    angular.module('ShoppingCart', ['ngRoute'])

    .controller('ListController',function($scope,$http){
        $http.get('app/data.json').success (function(data){
            $scope.guitarVariable = data[0].products;
        });
    })
    .controller('ListControllerTow',function($scope,$http){
        $http.get('app/data.json').success (function(data){
            $scope.guitarVariable = data[0].products;
        });
    })

    .controller('ListControllerThree',function($scope,$http){
        $http.get('app/data.json').success (function(data){
            $scope.guitarVariable = data[0].products;
        });
    })
    .controller('ListControllerFour',function($scope,$http){
        $http.get('app/data.json').success (function(data){
            $scope.guitarVariable = data[0].products;
        });
    })
    .controller('detailCtrl',function($scope,$http, $location){
        var current = $location.$$path.split('/')[2];
        $http.get('app/data.json').success (function(data){
            $scope.guitarVariable = data[0].products;
            console.log(data[0].products);
        });
    })

    .controller('HeaderController',function($scope, $location, $http){
        $http.get('app/data.json').success (function(data){
            $scope.siteTitle = data[0].siteTitle;
        });
        $http.get('app/data.json').success (function(data){
            $scope.navigation = data[0].nav;
        });
        $http.get('app/data.json').success (function(data){
            $scope.sidenavigation = data[0].topNav;
        });
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
     })

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/javascript', {
                    templateUrl: 'app/views/list.html',
                    controller: 'ListController'
                }).
                when('/javascript/:id', {
                    templateUrl: 'app/views/detail.html',
                    controller: 'detailCtrl'
                }).

                when('/backbone-js', {
                    templateUrl: 'app/views/list.html',
                    controller: 'ListControllerTow'
                }).
                when('/angular-js', {
                    templateUrl: 'app/views/list.html',
                    controller: 'ListControllerThree'
                }).
                when('/node-js', {
                    templateUrl: 'app/views/list.html',
                    controller: 'ListControllerFour'
                }).
                otherwise({
                    redirectTo: '/javascript'
                });
        }]);

})();