var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'mydbinstance.cosqjolt3uqu.us-west-2.rds.amazonaws.com',
    user: 'mydbinstance',
    password: 'trasmakinesi',
    database: 'test_schema'
});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a tableInfo');
});

router.get('/tableData', function (req, res, next) {

    connection.connect();

    connection.query('SELECT * FROM user_list;', function (err, rows, fields) {
        console.log(rows);
        if (err)
            throw err;
            console.log(err);
        
        res.json(rows);
    });

    connection.end();
});

module.exports = router;
