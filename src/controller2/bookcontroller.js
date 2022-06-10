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
        let getbook=await bookmodel.find().populate('publisher_id').select({"publisher_id.name":"Penguin"})
        
        res.send({getbook})
    }


    const agregate=async function(req,res){
        //let data=req.body
        let agregate=await bookmodel.aggregate(
            [
                
                    {$group: { _id:"$name",totalNumber:{$sum:"price"}}},
                    {$sort:{totalNumber:1} }
            ]
        )
        
        res.send({agregate})
    }
    
    

    
module.exports.createBook=createBook
module.exports.getbook= getbook
module.exports.agregate= agregate

  
  
  
  

  
  
  