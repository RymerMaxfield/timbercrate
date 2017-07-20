const APP = require('./server');

module.exports = {
  getAllProducts: function(req, res, next) {
    const db = req.app.get('db');
    db.get_products()
      .then( products => res.status(200).send(products) )
      .catch( error => res.status(500).send(error) )
  }, // end getAllProducts

  getProductById: function(req, res, next) {
    const db = req.app.get('db');
    db.get_product_by_id([req.params.id])
      .then( products => res.status(200).send(products) )
      .catch( error => res.status(500).send(error) )
  }, // end getProductById

  /*
   send info on the body like so:
    {
      image: 'image_url',
      cat: 'category'
    }
  */
  addProduct: function( req, res, next ) {
    const db = req.app.get( 'db' );
    let image = req.body.image,
        cat = req.body.category;
    db.add_product( [ image, cat ] )
      .then( response => res.status( 200 ).send( response[ 0 ] ) )
      .catch( err => res.status( 500 ).send( err ) )
  }, // end addProduct

  // this function updates the whole product (image_url and category
  // Needs id, image_url, and category, in that order
  updateAll: function( req, res, next ) {
    const db = req.app.get( 'db' );
    let id = req.params.id,
        image = req.body.image,
        category = req.body.category;
    db.update_product( [ id, image, category ] )
      .then( response => {
        res.status( 200 ).send( response[ 0 ] );
      } )
      .catch( error => {
        console.log( error );
        res.send( error );
      } )
  }, //end updateAll

  // this function just updates the category
  // Needs id and category, in that order
  updateCat: function( req, res, next ) {
    const db = req.app.get( 'db' );
    let id = req.params.id,
        cat = req.body.category;
    db.update_category( [ id, cat ] )
      .then( response => {
        res.status( 200 ).send( response[ 0 ] );
      } )
      .catch( error => {
        console.log( error );
        res.send( error );
      } )
  }, //end updateCat


  // this function just updates the image_url
  // Needs id and image_url in that order
  updateImage: function( req, res, next ) {
    const db = req.app.get('db');
    let id = req.params.id,
        image = req.body.image;
    db.update_image_url( [ id, image ] )
      .then( response => {
        res.status( 200 ).send( response[ 0 ] );
      } )
      .catch( error => {
        console.log( error );
        res.send( error );
      } )
  }, // end updateImage


  // this function will figure out if it's given a url, category or both to update
///// NOT DOING THIS YET. WILL SEE IF ITS WORTH IT


  // delete the row from the products table.
  // Needs id sent in.
  destroyProduct: function( req, res, next ) {
    const db = req.app.get( 'db' );
    db.destroy_product( [ req.params.id ] )
      .then( response => res.status( 200 ).send( `Product ${req.params.id} removed` ) )
      .catch( error => res.send( error ) )
  } // end destroyProduct






// 405, 451
//   badRequest: function(req, res, next) {
//     let errs = [405, 451]; //Math.round(Math.random())
//     res.status(errs[0]).send('Nope');
//   }
}; // end module.exports