const { json } = require("body-parser")
const { count } = require("console")
const ordermodel = require("../models/ordermodel")
const productmodel = require("../models/productmodel")
const userModel = require("../models/userModel")


const createorder= async function (req, res) {
    let data= req.body
    //user validation
    let user_id=data.userid
    let userid=await userModel.findById({_id:user_id})
    if(!userid){
        res.send("used id nont present")
    }
    //product validation
    let product_id=data.productid
    console.log(product_id)
    let productid=await productmodel.findById({_id:product_id})
    if(!productid){
        res.send("product id not present")
    }
    else{
        if(isfreeappuser===true){
            let savedData= await ordermodel.create(data)
    res.send({msg: savedData})
        }
        else{
            let price=await productmodel.findById({_id:product_id}).select({price:1})
            console.log(price)
   // let savedData2= await userModel.findByIdAndUpdate({_id:user_id})({$set:{balance: (balance-price)}})
    res.send({msg: "savedData2"})
}}}

module.exports.createorder= createorder
