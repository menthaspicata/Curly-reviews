let mysql = require('mysql');
let fs = require('fs');
let moment = require('moment');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'curly-reviews'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

let jsonFile = JSON.parse(fs.readFileSync('src/assets/messages_from_chat_ru.json', 'utf8'));

let values = jsonFile.map(function ( item ) {
  return [
    moment( item.date ).format('YYYY-MM-DD hh:mm:ss'),
    item.id,
    item.message,
    item.from_id,
    1
  ];
});

let sql = "INSERT INTO reviews (review_date, telegram_id, message, from_id, chat_id) VALUES ?";
connection.query(sql, [values], function(err) {
  if (err) throw err;
  connection.end();
});
