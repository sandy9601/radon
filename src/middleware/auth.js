const jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");

//authentication 

let auth =function(req,res, next){
let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
else{
    next()
}}

//authorization 


    
    module.exports.auth=auth
    //module.exports.auth2=auth2



//If no token is present in the request header return error
    // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself