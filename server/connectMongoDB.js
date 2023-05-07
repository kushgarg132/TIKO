import mongoose from "mongoose";

const connectDB = async () => {
  const CONNECTION_URL="mongodb+srv://kushgarg:i6zyttkWHOVIVkCW@railway.4yryib3.mongodb.net/";
  try {
    const conn = await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
