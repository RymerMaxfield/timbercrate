const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive');

const CONFIG = require('./config');

const APP = module.exports = express(),
      PORT = 3000;

APP.use(bodyParser.json());
APP.use(cors());


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
    console.log('connected to db');
    db.init.create_products_table()
      .then(nothing => {
        db.get_products()
          .then(products => console.log(products))
          .catch(productErr => console.log(productErr))
      })
      .catch(err => console.log(err))


  APP.get('/api/products', function(req, res) {
    db.get_products()
      .then(products => res.status(200).send(products))
      .catch(error => res.status(500).send(error))
  });

});




APP.listen(PORT, console.log(`Yo I'm on port ${PORT}`));