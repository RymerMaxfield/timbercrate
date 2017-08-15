angular.module('timbercrate')
  .controller('mainCtrl', function($scope, mainService) {

    $scope.openSidebar = function() {
      console.log("clicked");
      document.body.classList.add("no-scroll");
      var d = document.getElementById("nav-sidebar");
      var e = document.getElementById("sidebar-overlay");
      d.className += " sidebar-active";      
      e.className += " overlay-active";
    }

    $scope.closeSidebar = function() {
      document.body.classList.remove("no-scroll");      
      var d = document.getElementById("nav-sidebar");
      var e = document.getElementById("sidebar-overlay");
      d.classList.remove("sidebar-active");
      e.classList.remove("overlay-active");
    }

    mainService.getFeatured()
      .then(response => {
        $scope.featured = response;
      })

  });