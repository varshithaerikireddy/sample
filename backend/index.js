const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoRoute = require("./routes/todos");
dotenv.config();

const app = express();
const PORT = 3500;
const MONGODB_URL="mongodb://127.0.0.1:27017/Todo"

/* MONGODB URL */
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log(err);
    console.log("Unable to connect !");
  });

app.use(express.json());
app.use(cors());

/* WELCOME */
app.get("/", (req, res) => {
  res.send("WELCOME TO MY TODO APP BACKEND");
});

/* ROUTES */
app.use("/todos", todoRoute);

/* LISTENING */
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
