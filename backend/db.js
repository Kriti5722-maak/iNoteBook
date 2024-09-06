const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://kritishukla456:kritishukla1213@cluster0.mrwfw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = () => {
  mongoose.connect(mongoURI);
};

mongoose.connection.on("connected", () => console.log("database connected"));

module.exports = connectToMongo;
