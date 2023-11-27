import { de } from '@vidstack/react/dist/types/vidstack-react.js';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: Number,
    parentCategory: {
        type: String,
        required: true,
    },
    category: {
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
    imageKey: String,
    weight: Number,
    quantity: String,
    isNewProduct: Boolean,
    isSpecialOffer: Boolean,
    isRefurbished: Boolean,
    description: String,
    isPopular: Boolean,

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

productSchema.index({ name: 'text', description: 'text', brand: 'text', category: 'text', parentCategory: 'text' });


export default mongoose.models.Product || mongoose.model('Product', productSchema);

