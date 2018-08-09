var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
// use models here
    User                    = require("./models/user"),
    Comment                 = require("./models/comment"),
    Submission              = require("./models/submission");

// require routes files
var userRoutes              = require("./routes/users"),
    commentRoutes           = require("./routes/comments"),
    submissionRoutes        = require("./routes/submissions");


// app config
// mongoose.connect("mongodb://localhost/eva");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// passport config
app.use(require("express-session")({
  secret: "Eva Development 2018",
  resave: false,
  saveUninitialized: false
}));
// intialize passport and use session
app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

// testing shit
app.get("/", function(req, res){
   res.render("landing");
});

// use routes


// start server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Eva Wearable Feedback Submission Form server has been started!");
});
