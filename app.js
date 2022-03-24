const express = require('express')
const expressLayout = require('express-ejs-layouts');
const path = require('path')
const app = express();
const session = require("express-session")
const {v4:uuidv4} = require('uuid');
const router = require('./routes/Routes');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

// set express layouts
app.use(expressLayout);
app.set('layout', 'layouts/default');



// parser
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
}));

app.use('/',router);

app.get('/',(req,res) => {
    res.render('pages/default/login',{title: "Welcome, Admin BCR"})
})


const port = process.env.PORT || 5000;

app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});