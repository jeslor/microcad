import mongoose from 'mongoose';
const { Schema } = mongoose;
const descriptionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    value: String,
});

export default   mongoose.model('Description', descriptionSchema);