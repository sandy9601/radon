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
        let getbook=await (await bookmodel.find().populate('publisher_id')).updatemany
            
        res.send({getbook})
    }
    
    
module.exports.createBook=createBook
module.exports.getbook= getbook

  
  
  
  

  
  
  