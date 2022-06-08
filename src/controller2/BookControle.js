const { count } = require("console")
const ABookModel = require("../BookModel/ABookModel.js")
const AuthorModel = require("../AuthorModel/AuthorModel.js")


const CreateBook= async function (req, res) {
    let data= req.body
    let savedData= await ABookModel.create(data)
    res.send({msg: savedData})
}

const twostates= async function (req, res) {
    let A_ID= await ABookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let price=A_ID.price
    let C_ID= await ABookModel.find({name:"Two states"}).select({author_id:1,_id:0})
    //console.log(C_ID)
   let B_ID= await AuthorModel.find(C_ID[0]).select({author_name:1,_id:0})
   //console.log(B_ID)
    res.send({B_ID,price})
}
const findrange= async function (req, res) {
    let A_ID= await ABookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    //let C_ID= await ABookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,name:1,_id:0})
     let B_ID= await AuthorModel.find({author_id: A_ID.map(x=>x.author_id)}).select({author_name:1,_id:0})
    res.send({B_ID})}
    
    const books= async function (req, res) {
    let W=req.params
        //console.log(W)
        let A_ID= await ABookModel.find(W).select({name:1,_id:0})
        res.send({A_ID})}
  

module.exports.CreateBook=CreateBook
module.exports.twostates=twostates
module.exports.findrange=findrange
module.exports.books=books

