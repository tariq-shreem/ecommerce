const {Schema,model} = require('mongoose');

const schema = Schema({

    code:{
        Type:String,
        required:[true,'coupon name required'],
        trim:true,
        unique:[true,'coupon unique'],
    },
    discount:{
        type:Number,
    },
    expires:{
        type:Date,
    }
   

},{timestamps:true});

module.exports = model('coupon',schema);