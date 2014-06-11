var humpYoutube = angular.module('humpYoutube',['ngRoute']);
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
humpYoutube.controller('MainController',['$scope','$location',function($scope, $location){
  $scope.videoId = $location.search().v || '8UVNT4wvIGY';
  console.log($scope.videoId);
}]);
humpYoutube.directive('youtube', ['$sce', function($sce) {
  return {
    restrict: 'EA',
    scope: { id: '=' },
    template: '<iframe width="560" height="315" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
    link: function (scope) {

        scope.$watch('id', function (newVal) {
           if (newVal) {
              console.log(newVal)
               scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/v/"+ newVal + "?version=3&loop=1&autoplay=1&playlist="+ newVal);
           }
        });
    }
  };
}]);