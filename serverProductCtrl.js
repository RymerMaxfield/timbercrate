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
  } // end getProductById


}; // end module.exports