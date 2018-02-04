var express = require('express');
var router = express.Router();
var session = require('express-session')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Checking',condition:"True" });
});

router.post('/register',function(req,res){
   var User = {};
   
   if(!req.body.email || !req.body.password || !req.body.username){
      res.status("400");
      res.send("Invalid details!");
   }
   else{
     var newUser = {id:req.body.username,email:req.body.email,password:req.body.password};
     
     
     res.render('register',{id:newUser.id});
     
  }
});


router.get('/login',function(req,res){
   res.render('login');
});

router.all('/login',function(req,res,next){
    
   if(!req.body.email || !req.body.password){
      res.status("400");
      res.send("Invalid details!");
    }
   else{
     res.render('profile',{id:req.body.email})
   }
});

module.exports = router;
