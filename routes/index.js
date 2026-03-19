var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ title: 'Principal'});
});



// GET para registro de novo usuário
router.get( '/register', function(req, res, next) {
  res.render('register',{ title: 'Cadastro'});
});


router.get('login', function(req, res, next){
  res.render('login',{ title:'Login'});
})


module.exports = router;
