const express = require('express');
const router = express.Router();
const AuthorController = require("../controller2/AuthorController")
const BookControle= require("../controller2/BookControle")

//const BooksController= require("../controllers/BooksController")
//router.post("/createBook", BooksController.createBook  )
//router.get("/Booklist", BooksController.Booklist)
//router.post("/Bookyear", BooksController.Bookyear)
//router.post("/getParticularBooks", BooksController.getParticularBooks)
//router.get("/getXINRbooks", BooksController.getXINRbooks)
//router.get("/getRandombook", BooksController.getRandombook)

router.post("/CreateBook", BookControle.CreateBook )
router.post("/CreateAuthor", AuthorController.CreateAuthor)
router.get("/Chethanbagath", AuthorController.Chethanbagath)
router.get("/twostates",BookControle.twostates)
router.get("/findrange",BookControle.findrange)



module.exports = router;

