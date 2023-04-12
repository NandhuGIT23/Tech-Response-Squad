let { query } = require("express");
const express = require("express");
const connection = require("../../connection");
const nodemailer = require("nodemailer");
const router = express.Router();
const fs = require("fs");

router.get("/report.html", function (req, res) {
  res.sendFile(__dirname + "/report.html");
});

// const imageData = fs.readFileSync('../images/Nandhu bike pic.jpeg');
// console.log(imageData);

router.post("/report.html", (req, res) => {
  console.log(req.body);
  var pic = req.body.picture;
  // var audio = req.body.voice;
  var type = req.body.type;
  var per_injured = req.body.per_injured;
  var landmark = req.body.landmark;
  var text = req.body.text;
  var police = req.body.police;
  var fire = req.body.fire;
  var hospital = req.body.hospital;
  let nearestPolice = req.body.nearestPolice;
  let nearestHosp = req.body.nearestHosp;

  // connection.connect(function (error) {
  //     if (error) throw error;
  var query =
    "insert into report(r_pic,r_acctype,r_accno,r_landmark,r_comment,police,fire,hospital,r_lat,r_long, r_nearestPolice, r_nearestHosp) values('" +
    pic +
    "','" +
    type +
    "','" +
    per_injured +
    "','" +
    landmark +
    "','" +
    text +
    "','" +
    police +
    "','" +
    fire +
    "','" +
    hospital +
    "','" +
    nearestPolice +
    "','" +
    nearestHosp +
    "')";

  var sql = "select u_email from user where u_name=?";

  connection.query(query, function (error, result) {
    if (error) throw error;
    res.redirect("/frontend/thank/thank.html");
  });
  // });
});
module.exports = router;
