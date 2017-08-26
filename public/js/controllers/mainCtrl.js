angular.module('timbercrate')
  .controller('mainCtrl', function($scope, mainService) {
    
    $scope.userClicked = false;

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
        console.log($scope.featured);
      })

    $scope.enlargeImg = function (fileName) {
      $scope.userClicked = false;
      $scope.imgName = fileName;
      console.log($scope.userClicked);
      $("#fw-container").css("top", window.scrollY);
      $("body").addClass("no-scroll");
      console.log(window.scrollY);
      $("#fw-container").addClass("full-width-img");
    }
    $scope.closeImg = function () {
      $("body").removeClass("no-scroll");    
      $("#fw-container").removeClass("full-width-img");
      $scope.userClicked = true;
      console.log($scope.userClicked);      
    }

  });