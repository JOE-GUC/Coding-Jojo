import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
},{timestamps: true})

export default mongoose.models.Course || mongoose.model('Course',courseSchema)