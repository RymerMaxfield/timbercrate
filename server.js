const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive');

const CONFIG = require('./config');

const APP = module.exports = express(),
      PORT = 3000,
      productCtrl = require('./serverProductCtrl'),
      adminCtrl = require('./serverAdminCtrl'),
      PUBLIC_ROUTE = CONFIG.PUBLIC_ROUTES,
      ADMIN_ROUTE = CONFIG.ADMIN_ROUTES,
      CONTACT_ROUTE = CONFIG.CONTACT_ROUTE;

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
    /////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    /// un-comment this code for the first run to populate the db \\\
    /////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    db.init.create_products_table()
      .then(nothing => {
        // db.run("SELECT * FROM products")
        //   .then(response => console.log(response))
        //   .catch(err => console.log(err));
        console.log('Products Table created')
      })
      .catch(err => console.log(err));

    // ENDPOINTS \\
    // get all products
    APP.get( PUBLIC_ROUTE.GET , productCtrl.getAllProducts );
    // get all featured products
    APP.get( PUBLIC_ROUTE.GET_FEATURED , productCtrl.getFeatured );
    // get one product by id
    APP.get( PUBLIC_ROUTE.GETID, productCtrl.getProductById );

    // ADMIN ENDPOINTS
    // add a new product
    APP.post( ADMIN_ROUTE.POST , adminCtrl.checkCreds , adminCtrl.addProduct );

    // update product (by product id)
    APP.put( ADMIN_ROUTE.PUT.ALL , adminCtrl.checkCreds , adminCtrl.update );

    // update product category (by product id)
    APP.put( ADMIN_ROUTE.PUT.CATEGORY , adminCtrl.checkCreds , adminCtrl.update );

    // update product image (by product id)
    APP.put( ADMIN_ROUTE.PUT.IMAGE , adminCtrl.checkCreds , adminCtrl.update );

    // delete product by id
    APP.delete( ADMIN_ROUTE.DELETE , adminCtrl.checkCreds , adminCtrl.destroyProduct );

});




APP.post(CONTACT_ROUTE, adminCtrl.sendMail);

APP.listen(PORT, (a, b, c, d, e) => {
  console.log(`Yo I'm on port ${PORT}`);
});
