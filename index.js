const express = require('express');
//const path = require('path');
const http = require('http');
const connect = require('connect');
const app = express();
const path = require('path');
const router = express.Router();

const PORT = process.env.PORT || 5000;
app.use(express.static('assets'));
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/portfolio',function(req,res){
  res.sendFile(path.join(__dirname+'/views/portfolio.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/views/contact.html'));
  //__dirname : It will resolve to your project folder.
});

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', router);
app.use('/portfolio', router);
app.use('/contact', router);

app.listen(PORT, function(){
    console.log("We have started our server on port " + PORT);
});
