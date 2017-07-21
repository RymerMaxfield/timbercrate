angular.module('timbercrate')
  .controller('productCtrl', function($scope, mainService) {

    $scope.getProducts = mainService.getProducts().then(response => {
      console.log(response);
      $scope.products = response;
    })

  });