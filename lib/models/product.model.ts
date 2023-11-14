import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default:0,
        required: true,
    },

    parentCategory: {
        type: String,
        required: true,
       
    },
    category:{
        type: String,
        required: true,
    },
    productType: {
        type: String,
        required: true,
    },
    brand: String,
    color: String,
    imageURL: String,
    model: String,
    imageKey: String,
    weight: String,
    quantity: {
        type: Number,
        default: 0,
    },
    isNewProduct: Boolean,
    isSpecialOffer: Boolean,
    isRefurbished: Boolean,
    description: String,
    isPopular: Boolean,
    mainDescription:String,
    specifications:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Specification"
        }
    ],
   
    extraDescription:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Description"
        }
    ],
});


export default mongoose.model('Product', productSchema);

