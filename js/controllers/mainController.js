humpYoutube.controller('MainController',['$scope','$location',function($scope, $location){
  $scope.videoId = $location.search().v || '8UVNT4wvIGY';
  console.log($scope.videoId);
}]);