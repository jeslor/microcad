import mongoose from "mongoose";
const { Schema } = mongoose;
const specificationSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true
    }
})

export default mongoose.model("Specification",specificationSchema)