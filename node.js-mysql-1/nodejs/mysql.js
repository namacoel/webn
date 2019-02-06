var mysql      = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
var connection = mysql.createConnection({
  // host     : '192.168.0.14',
  host     : 'localhost',
  // host     : '127.0.0.1',
  user     : 'nodejs',
  password : 'nodejs',
  database : 'opentutorials',
  port     : 3306,
  insecureAuth : true
});
  
connection.connect();
  
connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
  
connection.end();