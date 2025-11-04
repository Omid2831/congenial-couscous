import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('MONGODB connected successfully!');
    } catch (error) {
        console.error('MONGODB HAS FAILED', error);
    }
}
export default connectDB;