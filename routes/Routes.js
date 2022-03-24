const express = require("express")
const router = express.Router()
const credintial = {
    email: "admin@gmail.com",
    password: "admin"
}

// login user
router.post('/login', (req,res)=>{
    // console.log(res);
    if (req.body.email == credintial.email && req.body.password == credintial.password) {
        req.session.user = req.body.email
        res.redirect('/dashboard');
    }else{
        res.render('pages/default/login',{title: "Welcome, Admin BCR."})
    }
})

router.get('/dashboard',(req,res) => {
    if (req.session.user) {
        res.render('pages/dashboard/home',{user:req.session.user, title: 'DASHBOARD', subTitle: 'List Order'})
    }else{
        res.render('pages/default/login',{title: "Welcome, Admin BCR."})
    }
})

router.get('/cars',(req,res)=>{
    if (req.session.user) {
        res.render('pages/car/car',{user:req.session.user, title: 'CARS', subTitle: 'List Cars'})
    }else{
        res.render('pages/default/login',{title: "Welcome, Admin BCR."})
    }
})
router.get('/cars/create',(req,res)=>{
    if (req.session.user) {
        res.render('pages/car/car-create',{user:req.session.user, title: 'CARS', subTitle: 'List Cars'})
    }else{
        res.render('pages/default/login',{title: "Welcome, Admin BCR."})
    }
})
router.get('/cars/edit',(req,res)=>{
    if (req.session.user) {
        res.render('pages/car/car-edit',{user:req.session.user, title: 'CARS', subTitle: 'List Cars'})
    }else{
        res.render('pages/default/login',{title: "Welcome, Admin BCR."})
    }
})
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
            res.send('terjadi kesalahan');
        }else{
            res.render('pages/default/login',{title: "Welcome, Admin BCR.", logout: "Berhasill Keluar"})
        }
    })
})
module.exports = router