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

const AuthorAge= async function (req, res) {

    let abc= await AuthorModel.find({age:{$gt:50}}).select({author_id : 1,_id:0})
    let def= await AuthorModel.find({age:{$gt:50}}).select({age:1,author_name:1,_id:0})
    let B_ID= await ABookModel.find({author_id: abc.map(x=>x.author_id)})
   // let rating=B_ID.find({rating:{$gt:4}})
//console.log(Author_id)
//let BooksbyCB=await ABookModel.find(Author_id[0])
res.send(def)
}

module.exports.CreateAuthor=CreateAuthor
module.exports.Chethanbagath=Chethanbagath
module.exports.AuthorAge=AuthorAge


