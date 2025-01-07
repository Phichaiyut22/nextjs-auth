import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGOODB_URI,
      console.log("Database connected successfully")
    );
  } catch (error) {
    console.log("Error occured while connecting to database", error);
  }
};
