const jwt=require("jsonwebtoken")
// authrization

const auth2=function(req,res,next){
   // let token = req.headers["x-Auth-token"];
   try{
    let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.status(400).send({ status: false, msg: "token is invalid" });
   let usertobemodified=decodedToken.userId
        let loggeduser=req.params.userId
        if (usertobemodified!=loggeduser){
            return res.status(403).send({status:false,message:"logged user is different from modifying user"})
        }
    else {
        next()
    }}
    catch(err){
        res.status(500).send({status:false,error:err.message})
    }}

    module.exports.auth2=auth2