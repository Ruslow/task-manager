require("./db/connect");
const express = require("express");
const app = express();
const products = require("./routes/products");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/products", products);

const port = 5001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log("server listening on port 5001");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
