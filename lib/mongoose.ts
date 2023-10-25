import mongoose from 'mongoose';
let isConnected: boolean = false;



export const connectToDatabase = async () => {
    
    mongoose.set('strictQuery', true);
    if (!process.env.DBURL) {
        console.log('Mongo DBURL not found');
        
    }
    if (isConnected) {
        console.log('already connected to mongo DB');

    }
  
    try {
        await mongoose.connect(process.env.DBURL!);
        
        isConnected = true;
        console.log('connected to mongo DB');
    } catch (err) {
        console.log('error connecting to mongo DB');
        console.log(err);
    }

}