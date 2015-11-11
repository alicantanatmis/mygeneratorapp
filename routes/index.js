var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'mydbinstance.cosqjolt3uqu.us-west-2.rds.amazonaws.com',
    user: 'mydbinstance',
    password: 'trasmakinesi',
    database: 'test_schema'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bootstrapTemplate', { title: 'Express' });
});

router.get('/form', function(req, res) {
  res.render('mypage', { title: 'Form' });
});

router.get('/form2', function(req, res, next) {
  res.render('mypage2', { title: 'Form' });
});

router.get('/form3', function(req, res, next) {
  res.render('mypage3', { title: 'Form' });
});

router.get('/form4', function(req, res, next) {
  res.sendFile('formhtml.html', { root: path.join(__dirname, '../public/html')});
});

router.get('/alican', function(req, res, next) {
  res.send('Hello Birader!');
  console.log('Buyrun kime bakmistiniz?');
});

router.post('/userLogIn', function(req, res){
    var body = req.body;
    console.log(body);
    
    var sql = "INSERT INTO ?? VALUES (?,?);";
    var inserts = ['user_list', body.Email, body.Password];
    sql = mysql.format(sql, inserts);
    console.log(sql);
    
    connection.connect();

    connection.query(sql, function (err, rows, fields) {
        console.log(rows);
        if (err)
            throw err;
            console.log(err);
    });

    connection.end();
    res.end();
});

module.exports = router;
