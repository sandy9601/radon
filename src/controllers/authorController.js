const authorModel= require("../models2/authorModel")
const bookModel = require("../models2/bookModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send({data: authorCreated})
}



//const getAuthorsData= async function (req, res) {
//    let authors = await AuthorModel.find()
  //  res.send({data: authors})
//}

module.exports.createAuthor= createAuthor
module.exports.getBooksWithAuthorDetails=getBooksWithAuthorDetails
//module.exports.getAuthorsData= getAuthorsData