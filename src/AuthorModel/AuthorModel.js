const mongoose = require('mongoose');
const Authorschema = new mongoose.Schema( {
       
        author_id:{
            type : String,
            required : true},
        author_name:String,
        age:Number,
        address:String
    } )

module.exports = mongoose.model('Author', Authorschema) //users
