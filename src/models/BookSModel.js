const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema( {
    bookName:{
        required : true,
    type:  String},
    authorName: String, 
    tags: [String],
    totalpages:Number,
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10},
    year:{type :Number,default:2021},
    stockAvailable:Boolean
}, { timestamps: true });

module.exports = mongoose.model('Novel', bookSchema) //users

