import mongoose from "mongoose";
const Schema = mongoose.Schema;

const giftcardSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    description: {
        type: String,
        minlength: 2,
        maxlength: 100,
    },
    price: {
        type: Number,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    quantity: {
        type: Number,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    category: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Giftcard", giftcardSchema);