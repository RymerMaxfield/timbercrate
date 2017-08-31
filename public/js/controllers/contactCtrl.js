angular.module('timbercrate')
  .controller('contactCtrl', function($scope, mainService) {

    $scope.sendMail = function(mail) {
      if (!mail.url) {
        // console.log('sending... ...');
        mainService.sendMail(mail)
          .then(res => {
            for(let key in mail) mail[key] = '';
            swal('Message Sent!');
            // console.log(res)
          })

      } else {
        return null;
      }
    }

  });