import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB0");
    } catch (error) {
        console.log("Error connecting to MongoDB");
    }
};

export default connectToMongoDb;