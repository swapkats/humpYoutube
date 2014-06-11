humpYoutube.directive('youtube', ['$sce', function($sce) {
  return {
    restrict: 'EA',
    scope: { id: '=' },
    template: '<iframe width="560" height="315" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
    link: ['$scope', function (scope) {

        scope.$watch('id', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/v/"+ newVal + "?version=3&loop=1&autoplay=1&playlist="+ newVal);
           }
        });
    }
  }];
}]);