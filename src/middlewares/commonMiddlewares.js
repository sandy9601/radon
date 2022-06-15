
const validation= function ( req, res, next) {
        //let free=req.body.isFreeAppUser
        let free=req.headers.isfreeappuser
        if(!free){
            res.send("the request is missing a mandatory header")
        }
        // creating an attribute
if(free==="true"){
req.appTypefree=true
}
else{
req.appTypefree=false
}
    next()
}

module.exports.validation=validation
