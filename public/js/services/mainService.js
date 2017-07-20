angular.module('timbercrate')
  .service('mainService', function($http) {

  this.getProducts = function() {
    return $http.get('/api/products')
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  });