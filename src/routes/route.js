const express = require('express');
//const nodemon=require('nodemon');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first evar')
});

router.post('/test-me-2', function (req, res) {
    console.log(req.body)
    let id=req.body.user
    let pwd=req.body.password
    console.log(id,pwd)
    res.send({messege: "hi" , status: true})
});

router.post('/test-me-3', function (req, res) {
    let arr=[1,"functionup"]
    let ele=req.body.element
    arr.push(ele)
    res.send({messege: arr , status: true})
});
let players =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]
router.post('/players', function (req, res) {
    let ele=req.body.element
    let nameIsrepeated=false
    for(i=0;i<players.length;i++){
        if((players[i].name===ele.name)){
            nameIsrepeated=true
            break;}}
            if(nameIsrepeated){
    res.send("player already exist enter new one");
    }
    else{
    players.push(ele)
    res.send(players)}});
module.exports = router;