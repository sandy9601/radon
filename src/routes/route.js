const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middleware/auth")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.auth, userController.getUserData)

router.put("/users/:userId", middleware.auth,userController.updateUser)

router.delete("/users/:userId", middleware.auth,userController.Deleteuser)

router.post("/users/:userId/posts",middleware.auth,userController.createposts)

module.exports = router;