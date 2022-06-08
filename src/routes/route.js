const express = require('express');
const router = express.Router();
const AuthorController = require("../controller2/AuthorController")
const BookControle= require("../controller2/BookControle")
const AuthorModel = require("../AuthorModel/AuthorModel.js")
const ABookModel = require("../BookModel/ABookModel.js")



const BooksController= require("../controllers/BooksController")
//router.post("/createBook", BooksController.createBook  )
//router.get("/Booklist", BooksController.Booklist)
router.post("/Bookyear", BooksController.Bookyear)
router.post("/getParticularBooks", BooksController.getParticularBooks)
//router.get("/getXINRbooks", BooksController.getXINRbooks)
//router.get("/getRandombook", BooksController.getRandombook)

router.post("/CreateBook", BookControle.CreateBook )
router.post("/CreateAuthor", AuthorController.CreateAuthor)
router.get("/Chethanbagath", AuthorController.Chethanbagath)
router.get("/twostates",BookControle.twostates)
router.get("/findrange",BookControle.findrange)
router.get("/books/:author_id", BookControle.books)
router.get("/AuthorAge", AuthorController.AuthorAge)




//async function(req,res){
//const books= async function (req, res) {
        //let W=req.params
        //console.log(W)
        //let A_ID= await ABookModel.find(W).select({name:1,_id:0})
        //res.send({A_ID})})
  




module.exports = router;

