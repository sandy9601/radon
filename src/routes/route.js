const express = require('express');
const router = express.Router();
const commonMW=require("../middlewares/commonMiddlewares")
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require ("../controllers/orderController")



router.post("/createUser",commonMW.validation, UserController.createUser)
router.post("/createproduct",commonMW.validation, productController.createproduct)
router.post("/createorder",commonMW.validation,orderController.createorder)

module.exports = router;
