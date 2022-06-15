const ordermodel = require("../models/ordermodel")
const productmodel = require("../models/productmodel")
const userModel = require("../models/userModel")


const createorder= async function (req, res) {
    let orderdetails= req.body
    //user validation
    let user_id=orderdetails.userid
    let userid=await userModel.findById({_id:user_id})
    if(!userid){
        res.send("used id nont present")
    }
    //product validation
    let product_id=orderdetails.productid
    let productid=await productmodel.findById({_id:product_id})
    if(!productid){
        res.send("product id not present")
    }
//scenario 1 paid app srvice
 if(!req.appTypefree &&userid.balance>=productid.price){
userid.balance=userid.balance-productid.price
await userid.save()
        orderdetails.amount=productid.price
            orderdetails.isFreeAppUser=false
            let orderCreated=await ordermodel.create(orderdetails)
            return res.send({status:true ,data:orderCreated})}
   // secnario 2 paid app user balammnce lessthan product orice

   else if(!req.appTypefree){
return res.send({status:false, message:"user doesnot have enough balnce"})
}
else{
    //scenario 3 free app user
    orderdetails.amount=0
    orderdetails.isFreeAppUser=true
    let createorder=await ordermodel.create(orderdetails)
    res.send({status:true,data:createorder})
}
}


module.exports.createorder= createorder
