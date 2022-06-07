const { count } = require("console")
const AuthorModel = require("../AuthorModel/AuthorModel.js")
const ABookModel = require("../BookModel/ABookModel.js")

const CreateAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const Chethanbagath= async function (req, res) {

    let Author_id= await AuthorModel.find({author_name:"Chetan Bhagat"}).select({author_id : 1,_id:0})
console.log(Author_id)
let BooksbyCB=await ABookModel.find(Author_id[0])
res.send(BooksbyCB)
}
module.exports.CreateAuthor=CreateAuthor
module.exports.Chethanbagath=Chethanbagath
