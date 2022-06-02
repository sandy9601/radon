const express = require('express');
const router = express.Router();

router.get('/movies/:indexNumber', function(req, res){
    const arr=["thor","hulk","ironman","wonderwomen"]
    let W=req.params
    if(W.indexNumber>arr.length){
        console.log("please give valid no")
        res.send("please give valid no")}
        else{
    console.log('requested movie is  '+arr[W.indexNumber])
    res.send(arr[W.indexNumber])}})

router.get('/movies', function(req, res){
    const arr=["thor","hulk","ironman","wonderwomen"]
res.send(arr)

});




router.get('/films', function(req,res){

const arrFilms=[ {
    id: "1",
    name: "The Shining"
   }, {
    id: "2",
    name: "Incendies"
   }, {
    id : "3",
    name: "Rang de Basanti"
   }, {
     id : "4",
    name: "Finding Nemo"
   }]
   res.send(arrFilms)});


   
   router.get('/films/:filmId', function(req,res){
    
    const arrFilms=[ {
        id: "1",
        name: "The Shining"
       }, {
        id: "2",
        name: "Incendies"
       }, {
        id : "3",
        name: "Rang de Basanti"
       }, {
         id : "4",
        name: "Finding Nemo"
       }]
       let X=req.params
       let Y=X.filmId-1
    if((X.filmId>arrFilms.length)||(X.filmId<=0)){
        console.log("No movie exists with this id")
        res.send("No movie exists with this id")}
        else{
            console.log(arrFilms[Y].name)
    res.send(arrFilms[Y].name)}});





router.get('/missing', function(req, res){
    const arrs=[1,2,3,5,6,7]
    let sumofArra=0
     arrs.forEach(x => {
        sumofArra += x;
    });
    let n=7
    let sumofNumbers=(n*(n+1))/2
const missingNumber=sumofNumbers-sumofArra
console.log({data: missingNumber})
res.send({data: missingNumber})
    });
    router.get('/missed', function(req, res){
        const arrs=[33,34,35,37,38]
        let sumofArra=0
         arrs.forEach(x => {
            sumofArra += x;
        });
        let n=arrs.length+1
        let firstNo=33
        let lastNo=38
        let sumofNumbers=(n*(firstNo+lastNo))/2
    const missingNumber=sumofNumbers-sumofArra
    console.log({data: missingNumber})
    res.send({data: missingNumber})
        });


module.exports = router;
// adding this comment for no reason

