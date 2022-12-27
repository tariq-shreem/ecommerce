const {Schema,model} = require('mongoose');

const schema = Schema({

    name:{
        type:String,
        required:[true,'user name required'],
        trim:true,
        minlength:[2,"too short brand name"]
    },
    email:{
        type:String,
        requierd:[true,'email required'],
        trim:true,
        unique:[true,'email must me unique'],
    },
    phone:{
        type:String,
        requierd:[true,'phone required'],
    },
    password:{
        type:String,
        requierd:[true,'password required'],
        minlength:[6,"too short password"],
    },
    profileImg:{
        type:String,
       
    },
    role:{
        type:String,
        enum:['admin','user'],
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    verified:{
        type:Boolean,
        default:false,
    },

},{timestamps:true});

module.exports = model('user',schema);