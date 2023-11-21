import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    accountType: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        maxlength: 100,
    },
    hashPassword: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    subscribe: {
        type: Boolean,
        default: false,
    },
    street: {
        type: String,
    },
    city: {
        type: String,
    },
    province: {
        type: String,
    },
    country: {
        type: String,
    },
    zipCode: {
        type: String,
    },
    phone: {
        type: String,
        minlength: 2,
        maxlength: 100,
    },
    fax: {
        type: String,
    },
    role:{
        type:String,
        default:"user"
    },
}, {
    timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', userSchema);