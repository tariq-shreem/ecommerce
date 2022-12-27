const {Schema,model} = require('mongoose');

const schema = Schema({

    name:{
        type:String,
        required:[true,'brand name required'],
        trim:true,
        unique:[true,'brand name unique'],
        minlength:[2,"too short brand name"]
    },
    image:String,

},{timestamps:true});

module.exports = model('brand',schema);