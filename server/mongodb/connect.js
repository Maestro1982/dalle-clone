import mongoose from 'mongoose';

const connectDB = (url) => {
  // This setting is for search functionalities later on
  mongoose.set('strictQuery', true);

  mongoose
    .connect(url)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log(err));
};

export default connectDB;
