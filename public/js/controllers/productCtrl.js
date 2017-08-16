angular.module('timbercrate')
  .controller('productCtrl', function($scope, mainService) {

    mainService.getProducts()
      .then( response => {
        $scope.products = response;
      })
      .catch( error => console.log( error ) );

  });