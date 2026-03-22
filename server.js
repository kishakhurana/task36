const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/posts", (req, res) => {
  res.send("POST ROUTE WORKING");
});

const routes = require("./routes/routes");
app.use("/", routes);

mongoose.connect("mongodb+srv://kishakhurana:Bmsce%402027@cluster0.79wwpwn.mongodb.net/task36")
  .then(() => console.log("db connected"))
  .catch(err => console.log(err));

app.listen(4000, () => {
  console.log("server running");
});