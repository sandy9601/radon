const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middleware/auth")
const middleware2=require("../middleware/auth2")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.auth,middleware2.auth2, userController.getUserData)

router.put("/users/:userId", middleware.auth,middleware2.auth2,userController.updateUser)

router.delete("/users/:userId", middleware.auth,middleware2.auth2,userController.Deleteuser)

router.post("/users/:userId/posts",middleware.auth,middleware2.auth2,userController.createposts)

module.exports = router;
