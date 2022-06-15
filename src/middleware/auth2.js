const jwt=require("jsonwebtoken")
// authrization

const auth2=function(req,res,next){
   // let token = req.headers["x-Auth-token"];
    let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
   let usertobemodified=decodedToken.userId
        let loggeduser=req.params.userId
        if (usertobemodified!=loggeduser){
            return res.send({status:false,message:"logged user is different from modifying user"})
        }
    else {
        next()
    }}

    module.exports.auth2=auth2