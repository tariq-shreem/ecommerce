const {Schema,model} = require('mongoose');

const schema = Schema({

    name:{
        type:String,
        required:[true,'product name required'],
        trim:true,
        unique:[true,'product name unique'],
        minlength:[3,"too short product name"]
    },
    slug:{
        type:String,
        lowercaser:true,
    },
    description:{
        type:String,
        required:[true,'product description required'],
        trim:true,
        minlength:[10,"too short product description"]
    },
    quantity:{
        type:Number,
        required:[true,'product quantity required'],
        default:0,
    }, 
    colors:[String],
    price :{
        type:Number,
        required:[true,'product price required'],

    },
    priceAfterDiscount:{
        type:Number,
        required:[true,'product priprice After Discountce required'],
    },
    imgeCover:String,
    images:[String],
    category:{
        type:Type.ObjectId,
        ref:'category',
        required:[true,'product category required'],
    },
    subCategory:{
        type:Type.ObjectId,
        ref:'subcategory',
        required:[true,'product subcategory required'],
    },
    brand:{
        type:Type.ObjectId,
        ref:'brand',
        required:[true,'product brand required'],
    },
    ratingAvg:{
        type:Number,
        min:[1,'reating average must be greater than 1'],
        max:[5,'reating average must be less than 5'],
    },
    ratingCount:{
        type:Number,
        default:0,
    },
    sold:{
        type:Number,
        default:0,
        require:[true,'product sold required']
    }

},{timestamps:true});

module.exports = model('product',schema);