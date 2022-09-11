var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res) {
  return res.render ("index")
})
router.get('/sobre', function(req, res) {
  return res.render("sobre")
})
  router.get('/contato', function(req, res) {
    return res.render("contato")
  })
  router.get('/shop-single', function(req, res) {
    return res.render("shop-single")
  })
  router.get('/shop', function(req, res) {
    return res.render("shop")
  })
  router.get('/adm/login', function(req, res) {
    return res.render("adm-login.ejs")
  })
  router.get('/adm/editar', function(req, res) {
    return res.render("adm-editar.ejs")
  })
  router.get('/adm/cadastro', function(req, res) {
    return res.render("adm-cadastro.ejs")
  })

module.exports = router;
