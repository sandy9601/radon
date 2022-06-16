const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  //creating user



  // Q1 creating User
const createUser = async function (req,res){
  try{
  let data = req.body;
  if(Object.keys(data).length!=0)
  {
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData })
  }else{
  res.status(400).send({status:false,msg:"bad request"})
  }}
catch(err){
    res.status(500).send({msg:"error",error:err.message})}
};


//Q 2 login and token genarating

const loginUser = async function (req,res) {
    try{
  let userName = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    })  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, token: token });
}
catch(err){
    res.status(500).send({msg:"error",error:err.message})
}}


// Q 3 get selected user
const getUserData = async function (req, res) {
    try{
let userId = req.params.userId;
 let userDetails = await userModel.findById(userId);
if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
}
catch(err){
    res.status(500).send({statusa:false,error:err.message})
}}


//Q 4 updating any user information
const updateUser = async function (req, res) {
    try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new :true});
  res.status(200).send({ status: true, data: updatedUser });
}
catch(err){
    res.status(500).send({status:false,error:err.message})
}}


//Q 5 deleting User

const Deleteuser = async function (req, res) {
    try{
      let userId = req.params.userId;
      let user = await userModel.findById(userId);
      //Return an error if no user with the given id exists in the db
      if (!user) {
        return res.status(404).send("No such user exists");
      }
      let Deleteuser = await userModel.findOneAndUpdate({ _id: userId }, {$set:{isDeleted:true}},{new:true});
      res.status(200).send({ status: true, data: Deleteuser });
    }
    catch(err){
        res.status(500).send({status:false,error:err.message})
    }}
    


    let createposts=async function(req,res){
        try{
        let user=await userModel.findById(req.params.userId)
        if(!user){
            return res.status(404).send({status:false , message:"no user exist"})
        }
        message=req.body.message 
        let updatepost=user.posts
        updatepost.push(message)
      let updatedUser=await userModel.findOneAndUpdate({_id:req.params.userId},{$set:{posts:updatepost}},{new:true})
res.status(200).send({status:true,message:updatedUser})
    }
    catch(err)
    {
        res.status(500).send({status:false,error:err.message})
    }}

    
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.Deleteuser = Deleteuser;
module.exports.createposts=createposts

