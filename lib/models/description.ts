import mongoose from 'mongoose';
const { Schema } = mongoose;
const descriptionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
});

export default  mongoose.models.Description|| mongoose.model('Description', descriptionSchema);