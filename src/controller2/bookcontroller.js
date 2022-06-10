const { json } = require("body-parser")
const authormodel = require("../models2/authormodel")
const bookmodel= require("../models2/bookmodel")
const publishermodel = require("../models2/publishermodel")



const createBook= async function (req, res) {
    let book = req.body
    let createBook=await bookmodel.create(book)
    res.send(createBook) 
     }


    
     const getbook=async function(req,res){
        let data=req.body
        let getbook=await bookmodel.find().populate(['author_id','publisher_id'])
let finalbooks=[]
for(i=0;i<getbook.length;i++){
    if(getbook[i].publisher_id.name==="Penguin"||getbook[i].publisher_id.name==="Harper Collins")
{
    let updatebook=await bookmodel.updateOne({name:getbook[i].name},{$set:{isHardCover:true}})
finalbooks.push(updatebook)}
if(getbook[i].author_id>3.5){
    let updatebook=await bookmodel.updateOne({name:getbook[i].name},{$set:{price:getbook[i].price +10}})
    finalbooks.push(updatebook)
}}
        res.send({msg:finalbooks})
    }
    

module.exports.createBook=createBook
module.exports.getbook= getbook
//module.exports.agregate= agregate

  
  
  
  

  
  
  