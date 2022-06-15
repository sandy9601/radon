const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  //creating user

  // Q1 creating User
const createUser = async function (req,res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

//Q 2 login and token genarating
const loginUser = async function (req,res) {
  let userName = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};


// Q 3 get selected user
const getUserData = async function (req, res) {
let userId = req.params.userId;
 let userDetails = await userModel.findById(userId);
if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
};

//Q 4 updating any user information
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new :true});
  res.send({ status: true, data: updatedUser });
};



//Q 5 deleting User

const Deleteuser = async function (req, res) {
      let userId = req.params.userId;
      let user = await userModel.findById(userId);
      //Return an error if no user with the given id exists in the db
      if (!user) {
        return res.send("No such user exists");
      }
      let Deleteuser = await userModel.findOneAndUpdate({ _id: userId }, {$set:{isDeleted:true}},{new:true});
      res.send({ status: true, data: Deleteuser });
    };
    



    let createposts=async function(req,res){
       // let token=req.headers["x-auth-token"]
        //let decodetoken=jwt.verify(token , "functionup-radon")
        //let usertobemodified=decodetoken.userId
        //let loggeduser=req.params.userId
        //if (usertobemodified!=loggeduser){
         //   return res.send({status:false,message:"logged user is different from modifying user"})
       // }
        let user=await userModel.findById(req.params.userId)
        if(!user){
            return res.send({status:false , message:"no user exist"})
        }
        message=req.body.message
        let updatepost=user.posts
        updatepost.push(message)
      let updatedUser=await userModel.findOneAndUpdate({_id:req.params.userId},{$set:{posts:updatepost}},{new:true})
res.send({status:true,message:updatedUser})
    }


    
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.Deleteuser = Deleteuser;
module.exports.createposts=createposts

