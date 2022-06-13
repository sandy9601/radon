const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
     Name: String,
catgory:String,
    price: {
        type:Number,
        required:true
    }
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema) //users

