import { de } from '@vidstack/react/dist/types/vidstack-react.js';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: Number,

    category: {
        type: String,
        required: true,
        enum: ['systems', 'hardware', 'network', 'storage',"display","peripherals"],
    },
    type: {
        type: String,
        required: true,
    },
    brand: String,
    color: String,
    imageURL: String,
    imageKey: String,
    weight: Number,
    quantity: String,
    isNew: Boolean,
    isSpecialOffer: Boolean,
    isRefurbished: Boolean,
    description: String,
    isPopular: Boolean,
    mainDescription:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Description"
        }
    ],
    specifications:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Description"
        }
    ],
    generalDescription:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Description"
        }
    ],
    extraDescription:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Description"
        }
    ],
});


export default mongoose.models.Product || mongoose.model('Product', productSchema);

