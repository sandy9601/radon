const { json } = require("body-parser")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishermodel = require("../models/publishermodel")

const createBook= async function (req, res) {
  let book = req.body
  if(!(book.author_id)&!(book.publisher_id)){
    res.send("author & publisher id's are  required")
  }
  else{
    let authorid=await authorModel.findById ({_id:book.author_id})
    
    //console.log(authorid)
    
    let json =JSON.stringify(authorid._id)
    let json2=JSON.stringify(book.author_id)

    
    let publisherid=await publishermodel.findById ({_id:book.publisher_id})
    let pb_id =JSON.stringify(publisherid._id)
    let pb_id2=JSON.stringify(book.publisher_id)

    console.log(json)
    console.log(json2)
    console.log(pb_id)
    console.log(pb_id2)


if((json===json2)&(pb_id===pb_id2)){
    let bookCreated = await bookmodel.create(book)
        res.send(bookCreated)
    }
    else{
        res.send("author_id or publisher id is not valid")
    }
}}

const createpublisher= async function (req, res) {
    let publisher= req.body
    console.log(publisher)
    let createpublisher = await publishermodel.create(publisher)
    res.send({data: createpublisher})
}






//const getBooksData= async function (req, res) {
  //  let books = await bookModel.find()
    //res.send({data: books})
//}

//const getBooksWithAuthorDetails = async function (req, res) {
  //  let specificBook = await bookModel.find().populate('author_id')
  //  res.send({data: specificBook})

//}

module.exports.createBook= createBook
//module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.createpublisher=createpublisher
