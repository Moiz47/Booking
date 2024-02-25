require('dotenv').config();
const mongoose = require("mongoose");

const connectMongoDb = async () => {
  const connectionString = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.6fua41d.mongodb.net/?retryWrites=true&w=majority`;
  console.log("🚀 ~ connectMongoDb ~ connectionString:", connectionString)
  return mongoose.connect(connectionString);
};

module.exports = connectMongoDb;
