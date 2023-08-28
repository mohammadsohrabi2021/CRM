import mongoose from "mongoose";

async function coonectDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to DB");
}

export default coonectDB;
