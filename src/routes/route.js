const express = require('express');
const router = express.Router();
const authorController=require("../controller/authorController")
const authorcontroller= require("../controller2/authorcontroller")
const bookController= require("../controller/bookController");
const bookcontroller= require("../controller2/bookcontroller");
const bookmodel = require('../models2/bookmodel');


router.post("/createAuthor", authorController.createAuthor  )

router.post("/createpublisher",bookController.createpublisher)

router.post("/createBook", bookController.createBook)

router.get("/getBooksWithAuthorDetails", authorcontroller.getBooksWithAuthorDetails)

//router.post("/createAuthor", authorcontroller.createAuthor)
//router.post("/createpublisher",authorcontroller.createpublisher)
//router.post("/createBook", bookcontroller.createBook)
//router.put("/getbook",bookcontroller.getbook)




module.exports = router;