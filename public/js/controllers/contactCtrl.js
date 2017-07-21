angular.module('timbercrate')
  .controller('contactCtrl', function($scope, mainService) {
let clicked = 0;
    $scope.sendMail = function(mail) {
      clicked++;
      console.log('clicked', clicked);
      mainService.sendMail(mail)
        .then(response => {
          console.log(response);
          $scope.messageSent = true;
        })
    }

  });