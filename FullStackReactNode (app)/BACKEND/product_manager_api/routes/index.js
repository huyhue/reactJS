var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')

//info to connect with postgreSql
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: 'huy123',
  port: 5432,
})

router.get('/', function(req, res, next) { });

// api get data from postgreSql
router.get('/getdata01', function(req, res, next) {   
  
  pool.query('SELECT * FROM product_info',(error,response) => {
    if(error){
      console.log(error);
    }else {      
      res.send(response.rows); //gửi dữ liệu từ phía API qua frontend
    }    
   // pool.end(); 
  })
   
});

router.get('/add', function(req, res, next) { 
  res.render('add',{});
});

//node js nhận được dữ liệu từ react js rồi INSERT dữ liệu vào postgresql
router.post('/add', function(req, res, next) { 
  var product_name = req.body.product_name,
  product_price = req.body.product_price,
  image = req.body.image; 

  pool.query("INSERT INTO product_info (product_name,product_price,image) values ($1,$2,$3)",[product_name,product_price,image],(err,response)=>{
    if(err) {
      res.send(err);
      res.send(0); //0.false
    }
    else {
      res.send(1);  //1.true
    }
  })
});

module.exports = router;
