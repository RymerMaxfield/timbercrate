const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive');

const CONFIG = require('./config');

const APP = module.exports = express(),
      PORT = 3000,
      productCtrl = require('./serverProductCtrl');

APP.use(bodyParser.json());
APP.use(cors(CONFIG.CORSOPTIONS));
APP.use(express.static('./public'));

APP.get('api/test', function(req,res) {
  res.send('App is connected')
});



massive({
  host: CONFIG.DB.HOST,
  database: CONFIG.DB.DB,
  user: CONFIG.DB.USER,
  port: CONFIG.DB.PORT,
  password: CONFIG.DB.PASSWORD,
  ssl:CONFIG.DB.SSL
}).then(db => {
    APP.set('db', db);
    db.init.create_products_table()
      .then(nothing => {
        console.log('Products Table created')
      })
      .catch(err => console.log(err));

// ENDPOINTS

  // get all products
  APP.get( '/api/products', productCtrl.getAllProducts );

  // add a new product
  APP.post( '/api/products/new', productCtrl.addProduct );

  // update product (by product id)
  APP.put( '/api/products/update/all/:id', productCtrl.updateAll );

  // update product category (by product id)
  APP.put( '/api/products/update/cat/:id', productCtrl.updateCat );

  // update product image (by product id)
  APP.put( '/api/products/update/image/:id', productCtrl.updateImage );

  // delete product by id
  APP.delete( '/api/products/delete/:id', productCtrl.destroyProduct );

  // get one product by id
  APP.get( '/api/products/:id', productCtrl.getProductById );

});




APP.listen(PORT, console.log(`Yo I'm on port ${PORT}`));