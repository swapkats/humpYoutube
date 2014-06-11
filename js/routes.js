humpYoutube.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'hump.html',
    controller: 'MainController'
  })
  .when('/watch', {
    templateUrl: 'hump.html',
    controller: 'MainController'
  });

  $locationProvider.html5Mode(true);

}]);