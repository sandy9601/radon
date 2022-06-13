const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
userid:{
    type:ObjectId,
    ref:"user"
},
productid:{
    type:ObjectId,
    ref:"product"
},
amount:{
    type:Number,
    default:0
},
    isFreeAppUser:{
        type:Boolean,
        default:false},
    Date:String

}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema) //users

