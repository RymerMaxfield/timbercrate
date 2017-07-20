angular.module('timbercrate')
  .controller('mainCtrl', function($scope, mainService) {

    $scope.getProducts = mainService.getProducts().then(response => {
      console.log(response);
      $scope.products = response;
    })

  });