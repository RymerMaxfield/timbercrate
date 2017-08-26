angular.module('timbercrate')
  .controller('contactCtrl', function($scope, mainService) {

    $scope.sendMail = function(mail) {
      if (!mail.url) {
        mainService.sendMail(mail)
          .then(res => {
            mail.name = '';
            mail.email = '';
            mail.url = '';
            mail.msg = '';
          })

      } else {
        return null;
        //do nothing
      }
    }

  });