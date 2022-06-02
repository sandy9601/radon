const express = require('express');
const lodash=require('lodash');
const module1 =require('../logger/logger');
const module2 =require('../util/helper');
const module3 =require('../validator/formattor');

const router = express.Router();

router.get('/test-me', function (req, res) {
    //module1
    module1.welcome()
    //module2
    module2.PrintDate()
    module2.PrintMonth()
    module2.getBatchInfo()
    //module 3
    module3.trim()
    module3.changetoLowerCase()
    module3.changetoUpperCase()
    res.send('My first api!')});

    router.get('/hello', function (req, res) {
        let months=["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"]
    const chunk=lodash.chunk(months,4)
    console.log(chunk)
     const a=[1,3,5,7,9,11,13,15,17,19]
     const tail=lodash.tail(a)
     console.log(tail)
const arr1=[1,2,1],arr2=[1,2,3],arr3=[1,2,3,4,],arr4=[1,2,3,4,5],arr5=[1,2,3,4,5,6]
const union=lodash.union(arr1,arr2,arr3,arr4,arr5)
console.log(union)
const arrParis=[["horror","The Shining"],["drama","titani"] ,["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]

const paris=lodash.fromPairs(arrParis)
console.log(paris)
        res.send('My second api!')});
module.exports = router;
// adding this comment for no reason

