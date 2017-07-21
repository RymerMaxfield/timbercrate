angular.module('timbercrate')
  .service('mainService', function($http) {

  this.getProducts = function() {
    return $http.get('/api/products')
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  this.sendMail = function(mail) {
    console.log('received ', mail);
    return $http({
     method: 'POST',
     url: '/api/contact',
     data: mail
    }).then(response => response)
  }

  });