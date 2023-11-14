import mongoose from 'mongoose';
const { Schema } = mongoose;

const specificationSchema = new Schema({
    name: {
        type: String,
    },
    value: {
        type: String,
    },
});

export default mongoose.models.Specification || mongoose.model('Specification', specificationSchema);