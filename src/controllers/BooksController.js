const { count } = require("console")
const BookModel= require("../models/BookSModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const Booklist= async function (req, res) {
    let allBooks= await BookModel.find( ).select( { bookName: 1, authorName: 1, _id: 0})
    res.send({msg: allBooks})
}
const Bookyear= async function (req, res) {
let year=req.query.year
    let allBooks= await BookModel.find({year})
    res.send({msg: allBooks})
}
const getParticularBooks= async function (req, res) {
    let body=req.params
    console.log(body)
        let allBooks= await BookModel.find({authorName:"bradpit"})
        res.send({msg: allBooks})
    }
    const getXINRbooks= async function (req, res) {
        let allBooks= await BookModel.find({"prices.indianPrice":{$in:["100INR","200INR","500INR"]}})
            res.send({msg: allBooks})
        }
        const getRandombook= async function (req, res) {
            let allBooks= await BookModel.find(
                { 
                $or: [ {stockAvailable: true } , { totalpages: {$gt:"500"}}]}
            )
                res.send({msg: allBooks})
            }


module.exports.Bookyear=Bookyear
module.exports.createBook= createBook
module.exports.Booklist=Booklist
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRbooks=getXINRbooks
module.exports.getRandombook=getRandombook
