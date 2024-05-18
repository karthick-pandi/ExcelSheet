const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const app = express();
const dotenv = require('dotenv')

const employee = require("./Models/EmployeeSchema");

const router = require("./routes/router")


dotenv.config()

app.use(cors());
app.use(express.json());
app.use(router);

mongoose.connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(3003)

