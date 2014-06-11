humpYoutube.controller('MainController',['$scope','$location',function($scope, $location){
  $scope.videoId = $location.search().v || 'b-J95fYuVz4';
}]);