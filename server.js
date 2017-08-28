const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive');

const CONFIG = require('./config');

const APP = module.exports = express(),
      productCtrl = require('./serverProductCtrl'),
      adminCtrl = require('./serverAdminCtrl'),
      PUBLIC_ROUTE = CONFIG.PUBLIC_ROUTES,
      CONTACT_ROUTE = CONFIG.CONTACT_ROUTE;

APP.use(bodyParser.json());
APP.use(cors(CONFIG.CORSOPTIONS));
APP.use(express.static('./public'));

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
        return nothing;
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
    // APP.post( ADMIN_ROUTE.POST , adminCtrl.checkCreds , adminCtrl.addProduct );

    // update product (by product id)
    // APP.put( ADMIN_ROUTE.PUT.ALL , adminCtrl.checkCreds , adminCtrl.update );

    // update product category (by product id)
    // APP.put( ADMIN_ROUTE.PUT.CATEGORY , adminCtrl.checkCreds , adminCtrl.update );

    // update product image (by product id)
    // APP.put( ADMIN_ROUTE.PUT.IMAGE , adminCtrl.checkCreds , adminCtrl.update );

    // delete product by id
    // APP.delete( ADMIN_ROUTE.DELETE , adminCtrl.checkCreds , adminCtrl.destroyProduct );

});




APP.post(CONTACT_ROUTE, adminCtrl.sendMail);

APP.listen(process.env.EXPRESS_PORT || CONFIG.PORT);
