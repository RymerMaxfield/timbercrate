angular.module('timbercrate')
  .controller('mainCtrl', function($scope, mainService, $state) {
    
    $scope.userClicked = false;

    $scope.openSidebar = function() {
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

    $scope.enlargeImg = function (fileName) {
      $scope.userClicked = false;
      $scope.imgName = fileName;
      $("#fw-container").css("top", window.scrollY);
      $("body").addClass("no-scroll");
      $("#fw-container").addClass("full-width-img");
    }

    $scope.closeImg = function () {
      $("body").removeClass("no-scroll");    
      $("#fw-container").removeClass("full-width-img");
      $scope.userClicked = true;
    }

    $scope.anchorClose = function() {
      document.body.classList.remove("no-scroll");      
      var d = document.getElementById("nav-sidebar");
      var e = document.getElementById("sidebar-overlay");
      d.classList.remove("sidebar-active");
      e.classList.remove("overlay-active");           
      if ($state.current.name === 'products') {
        $state.go('home', {whenever: 'whatever'}).then(function() {
          $('html, body').animate({
            scrollTop: $("#doContact").offset().top + 50
        }, 500);
        });
        
      }
      else {
        $('html, body').animate({
          scrollTop: $("#doContact").offset().top + 50
      }, 500);
      }
    }

    $scope.toContact = function() {
      $('html, body').animate({
        scrollTop: $("#doContact").offset().top + 50
    }, 500);
    }
    
   


  });