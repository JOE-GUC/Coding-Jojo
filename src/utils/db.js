import mongoose from "mongoose";


mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    }
    catch {
            throw new Error("Couldn't connect to Mongo")
        }

    
}

export default connectDB;