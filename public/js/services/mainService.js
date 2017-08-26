angular.module( 'timbercrate' )
  .service( 'mainService', function( $http ) {

    this.getFeatured = function() {
      return $http.get( '/api/products/featured' )
        .then( response => response.data )
        .catch( error => console.log( error ) );
    };
    this.getProducts = function() {
      return $http.get( '/api/products' )
        .then( response => response.data )
        .catch( error => console.log( error ) );
    };

    this.sendMail = function( mail ) {
      return $http( {
       method: 'POST',
       url: '/api/contact',
       data: mail
      } )
        .then( response => response )
        .catch( error => error )
    }

  });