const express = require('express');
const router = express.Router();

const BooksController= require("../controllers/BooksController")


router.post("/createBook", BooksController.createBook  )

router.get("/Booklist", BooksController.Booklist)

router.get("/Bookyear", BooksController.Bookyear)

router.post("/getParticularBooks", BooksController.getParticularBooks)

router.get("/getXINRbooks", BooksController.getXINRbooks)

router.get("/getRandombook", BooksController.getRandombook)

module.exports = router;

