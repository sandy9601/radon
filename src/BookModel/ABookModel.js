const mongoose = require('mongoose');
const Navelschema = new mongoose.Schema( {
    name:{
        type:String,
        required:true
    },
    author_id:{
        type:Number,
        required:true},
    price:Number,
    ratings:Number
} )
module.exports = mongoose.model('BooksForAuthor', Navelschema) //users
