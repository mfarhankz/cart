(function(){
    angular.module('ShoppingCart', ['ui.router'])

    .controller('FeatureProduct',function($scope,getDataToJson,$location){
        getDataToJson.getData('app/data.json',function(data){
            var result = [];
            var current;
            for(var i = 0; i < data[0].products.length; i++){
                current = data[0].products[i];
                if(current.featureProduct === true){
                    result.push(current);
                }
            }
            $scope.BookStore = result;
            $scope.BookStore[0].categoryName = 'Featured';
        });
    })
    .controller('JavaScript',function($scope,getDataToJson,$location){
        getDataToJson.getData('app/data.json',function(data){
            var cat = $location.$$path.split('/')[1];
            var result = [];
            var current;
            for(var i = 0; i < data[0].products.length; i++){
                current = data[0].products[i];
                if(current.category === cat){
                    result.push(current);
                }
            }
            $scope.BookStore = result;
        });
    })
    .controller('BackboneJs',function($scope,getDataToJson,$location){
        getDataToJson.getData('app/data.json',function(data){
            var cat = $location.$$path.split('/')[1];
            var result = [];
            var current;
            for(var i = 0; i < data[0].products.length; i++){
                current = data[0].products[i];
                if(current.category === cat){
                    result.push(current);
                }
            }
            $scope.BookStore = result;
        });
    })
    .controller('AngularJs',function($scope,getDataToJson,$location){
        getDataToJson.getData('app/data.json',function(data){
            var cat = $location.$$path.split('/')[1];
            var result = [];
            var current;
            for(var i = 0; i < data[0].products.length; i++){
                current = data[0].products[i];
                if(current.category === cat){
                    result.push(current);
                }
            }
            $scope.BookStore = result;
        });
    })
    .controller('NodeJs',function($scope,getDataToJson,$location){
        getDataToJson.getData('app/data.json',function(data){
            var cat = $location.$$path.split('/')[1];
            var result = [];
            var current;
            for(var i = 0; i < data[0].products.length; i++){
                current = data[0].products[i];
                if(current.category === cat){
                    result.push(current);
                }
            }
            $scope.BookStore = result;
        });
    })
    .controller('detailCtrl',function($scope,getDataToJson,$location){
        getDataToJson.getData('app/data.json',function(data){
            var id = $location.$$path.split('/')[2];
            var current;
            for(var i = 0; i < data[0].products.length; i++){
                current = data[0].products[i];
                if(current.productId === id){
                    $scope.book = current;
                }
            }

            var cat = $location.$$path.split('/')[1];
            var result = [];
            var currentCat;
            for(var i = 0; i < data[0].products.length; i++){
                currentCat = data[0].products[i];
                if(currentCat.category === cat){
                    result.push(currentCat);
                }
            }
            $scope.BookStore = result;

            setTimeout(function(){
                $("#slider").owlCarousel({
                    navigation : true,
                    slideSpeed : 300,
                    paginationSpeed : 400,
                    singleItem:true
                });
            },50);
        });
    })
    .controller('HeaderController',function($scope, getDataToJson,$location){
        getDataToJson.getData('app/data.json',function(data){
            $scope.siteTitle = data[0].siteTitle;
            $scope.navigation = data[0].nav;
            $scope.sidenavigation = data[0].topNav;
        });
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
     })
    .value('cart', [])

    .controller('AddToCart', function($scope,getDataToJson, cart){
        getDataToJson.getData('app/data.json',function(data){
            var current;
            $scope.addCart = (function(id){
                for(var i = 0; i < data[0].products.length; i++){
                    current = data[0].products[i];
                    if(current.productId === id){
                        cart.push(current);
                    }
                }
                console.log(cart);
            });
        });
    })

    .controller('cartUpdate', function($scope, cart){
        $scope.lenghtItem = cart.length;
        $scope.priceItem = 0;
    })

    .service('getDataToJson', function($http){
        return {
            getData: function(url,callBack){
                $http.get(url).success(callBack);
            }
        }
    })
    .config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            //$locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/feature');
            $stateProvider
            .state('FeatureProduct', {
                url: '/featured',
                templateUrl: 'app/views/list.html',
                controller: 'FeatureProduct'
            })
            .state('JavaScript', {
                url: '/javascript',
                templateUrl: 'app/views/list.html',
                controller: 'JavaScript'
            })
            .state('Backbone Js', {
                url: '/backbone-js',
                templateUrl: 'app/views/list.html',
                controller: 'BackboneJs'
            })
            .state('Angular Js', {
                url: '/angular-js',
                templateUrl: 'app/views/list.html',
                controller: 'AngularJs'
            })
            .state('Node Js', {
                url: '/node-js',
                templateUrl: 'app/views/list.html',
                controller: 'NodeJs'
            })
            .state('JavaScriptDetail', {
                url: '/javascript/:id',
                templateUrl: 'app/views/detail.html',
                controller: 'detailCtrl'
            })
            .state('BackboneDetail', {
                url: '/backbone-js/:id',
                templateUrl: 'app/views/detail.html',
                controller: 'detailCtrl'
            })
            .state('AngularDetail', {
                url: '/angular-js/:id',
                templateUrl: 'app/views/detail.html',
                controller: 'detailCtrl'
            })
            .state('NodeJsDetail', {
                url: '/node-js/:id',
                templateUrl: 'app/views/detail.html',
                controller: 'detailCtrl'
            })

    }]);



})();