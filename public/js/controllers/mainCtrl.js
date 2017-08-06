angular.module('timbercrate')
  .controller('mainCtrl', function($scope, mainService) {

    mainService.getFeatured()
      .then(response => {
        $scope.featured = response;
      })

  });