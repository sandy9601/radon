const publishermodel = require("../models2/publishermodel")
const authormodel= require("../models2/authormodel")
const bookmodel = require("../models2/bookmodel")

const createAuthor= async function (req, res) {
    let author = req.body
    let createAuthor = await authormodel.create(author)
    res.send({data: createAuthor})
}

const createpublisher = async function(req ,res){
    let publisher=req.body
 let createpublisher=await publishermodel.create(publishe)
    res.send({dataa:createpublisher})
}

const basicmw = async function (req, res,next) {
    let loggedin=true
    if(loggedin){
        console.log(new Date())

        console.log(req.params)
        res.send("login failed")
    }
    else{
        next()
    }}

    const basicmwapi =async function(req,res){
        res.send("this is a validation check")
    }
//    let authors = await AuthorModel.find()
  //  res.send({data: authors})
//}

module.exports.createAuthor= createAuthor
module.exports.createpublisher=createpublisher
module.exports.basicmwapi= basicmwapi
module.exports.basicmw= basicmw
