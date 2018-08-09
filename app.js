var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local");
// use models here

// require routes files

// passport config

// use routes

// start server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Eva Wearable Feedback Submission Form server has been started!");
});
