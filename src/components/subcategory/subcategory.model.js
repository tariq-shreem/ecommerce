import {Schema,model,Types} from 'mongoose';

const schema = Schema({

    name:{
        Type:String,
        required:[true,'subcategory name required'],
        trim:true,
        unique:[true,'subcategory name unique'],
        minlength:[2,"too short subcategory name"]
    },
    Slug:{
        Type:String,
        lowercase:true,
    },
    category:{
        type:Types.ObjectId,
        ref:'category'
    }


},{timestamps:true});

module.exports = model('subcategory',schema);