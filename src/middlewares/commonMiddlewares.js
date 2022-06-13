
const validation= function ( req, res, next) {
        //let free=req.body.isFreeAppUser
        let free=req.headers.isfreeappuser
        if(!free){
            res.send("the request is missing a mandatory header")
        }
        else{
    next()
}
}
module.exports.validation=validation
