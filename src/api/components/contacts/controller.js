'use strict';
let mysql = require('mysql');
let moment = require('moment');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'curly-reviews'
});

connection.connect(function(err) {
  if (err) throw err
});

async function handleContactRequest(req, res, next) {
  try {
      let reviewDate = moment(req.body.date).format('YYYY-MM-DD hh:mm:ss'),
        reviewName = req.body.name,
        reviewMessage = req.body.message;
      let sql = `INSERT INTO reviews_from_site(review_date, reviewer_name, message) VALUES ('${reviewDate}', '${reviewName}', '${reviewMessage}')`;
      connection.query(sql, function (err) {
        if (err) throw err;
      });
      console.log('connected as id ' + connection.threadId);

    res.status(200).json('');
  } catch (e) {
    console.log(e);
    next();
  }
}

async function getReviewsFromSite(req, res) {
  try {
      connection.query('SELECT review_date, reviewer_name, message FROM reviews_from_site', function (err, data) {
        if (err) return console.log(err);
        res.status(200).json(data);
      });

  } catch (e) {
    console.log(e);
    next();
  }
}

async function getReviewsFromUAChat(req, res) {
  try {
    connection.query('SELECT review_date, message FROM reviews WHERE chat_id = 2', function (err, data) {
      if (err) return console.log(err);
      res.status(200).json(data);
    });

  } catch (e) {
    console.log(e);
    next();
  }
}

async function getReviewsFromRUSChat(req, res) {
  try {
    connection.query('SELECT review_date, message FROM reviews WHERE chat_id = 1', function (err, data) {
      if (err) return console.log(err);
      res.status(200).json(data);
    });

  } catch (e) {
    console.log(e);
    next();
  }
}

module.exports = {handleContactRequest, getReviewsFromSite, getReviewsFromUAChat, getReviewsFromRUSChat};
