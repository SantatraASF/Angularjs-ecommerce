angular.module('myApp', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/a', {
                templateUrl: "html/product.html",
                controller: 'productCtrl'
            })
            .when('/details/:id', {
                templateUrl: "html/details.html",
                controller: 'detailsCtrl'
            })
            .otherwise({redirectTo: '/a'})
          
    })

    .factory('Appfactory', function () {
        var factory = {
            products: [{
                    "id": 0,
                    "picture": "img/android.jpg",
                    "name": "Ayala Gonzalez",
                    "details": [{
                        "prix": 800,
                        "nom": "Ayala Gonzalez",
                        "about": "Ex ex laborum proident eu veniam laborum anim. Fugiat in cupidatat sint nostrud. Cillum eu do elit ut dolore. Eiusmod deserunt non amet laboris nostrud ut culpa ullamco veniam Lorem. Dolor commodo quis magna cupidatat anim sit. Irure mollit velit in aute anim do magna in cillum nulla. Anim dolore fugiat reprehenderit officia ullamco consectetur minim.\r\n"
                    }]
                },
                {
                    "id": 1,
                    "picture": "img/edge.jpg",
                    "name": "Cooke Rutledge",
                    "details": [{
                        "prix": 200,
                        "nom": "Cooke Rutledge",
                        "about": "Sint nostrud fugiat aliquip ullamco commodo. Tempor tempor aute deserunt voluptate incididunt laboris ex minim labore. Ex officia minim labore reprehenderit quis. Id anim sunt eu veniam pariatur.\r\n"
                    }]
                },
                {
                    "id": 2,
                    "picture": "img/foza.jpg",
                    "name": "Butler Higgins",
                    "details": [{
                        "prix": 120,
                        "nom": "Butler Higgins",
                        "about": "Pariatur ipsum sint in consectetur eu sit laborum dolore. Irure magna Lorem ea quis labore aute anim reprehenderit. Enim officia enim esse id in ipsum proident fugiat aute est cillum qui laborum.\r\n"
                    }]
                },
                {
                    "id": 3,
                    "picture": "img/1.jpg",
                    "name": "Nash Durham",
                    "details": [{
                        "prix": 450,
                        "nom": "Nash Durham",
                        "about": "Sint amet culpa consectetur id pariatur ullamco et veniam in nostrud duis et Lorem. Sit elit cillum incididunt consectetur elit occaecat Lorem do esse nostrud. Esse adipisicing aliqua ullamco duis sit anim nulla. Sint eiusmod nisi irure dolor velit est duis occaecat nisi id. Laborum exercitation ut sunt voluptate. Velit enim deserunt commodo veniam aliquip occaecat est deserunt laborum et.\r\n"
                    }]
                },
                {
                    "id": 4,
                    "picture": "img/2.jpg",
                    "name": "Laura Torres",
                    "details": [{
                        "prix": 650,
                        "nom": "Laura Torres",
                        "about": "Velit deserunt veniam fugiat minim et deserunt ad et aliqua laboris enim fugiat. Nisi ullamco ipsum nostrud aliqua sunt eiusmod cupidatat. Anim voluptate mollit est laborum sint laboris excepteur laborum amet dolore minim commodo. Nisi aliqua deserunt proident laborum veniam deserunt sit anim irure amet et culpa voluptate reprehenderit. Est ea non culpa elit consequat mollit officia nostrud do nostrud in fugiat minim.\r\n"
                    }]
                },
                {
                    "id": 5,
                    "picture": "img/3.jpg",
                    "name": "Curtis Hess",
                    "details": [{
                        "prix": 340,
                        "nom": "Curtis Hess",
                        "about": "Exercitation culpa exercitation amet tempor dolore. Magna aliqua consequat fugiat ut laboris reprehenderit ut tempor tempor fugiat reprehenderit incididunt. Est anim non proident mollit pariatur nostrud ex.\r\n"
                    }]
                },
            ],
            getProducts: function () {
                return factory.products;
            },
            getProduct: function (id) {
                var product = {};
                angular.forEach(factory.products, function (value, key) {
                    if (value.id == id) {
                        product = value
                    }
                });
                return product;
            },
            carts : []
        }
        return factory;
    })

    .controller('productCtrl', function ($scope, Appfactory) {
        $scope.products = Appfactory.getProducts();

    })

    .controller('detailsCtrl', function ($scope, Appfactory, $routeParams) {
        $scope.carts = Appfactory.carts;
        var post = Appfactory.getProduct($routeParams.id);
        $scope.image = post.picture;
        $scope.title = post.name;
        //$scope.details = post.details;
        $scope.post = post;

        $scope.add_cart = function (det) {
            if (det) {
                $scope.carts.push({
                    id: det.id,
                    prix: det.prix,
                    nom: det.nom
                });
            }
        }

        $scope.total = 0;

        $scope.setTotals = function (cart) {
            if (cart) {
                $scope.total += cart.prix;
            }
        }

        $scope.remove_cart = function (cart) {
            if (cart) {
                $scope.carts.splice($scope.carts.indexOf(cart), 1);
                $scope.total -= cart.prix;
            }
        }
    })