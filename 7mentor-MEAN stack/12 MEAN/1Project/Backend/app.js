const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

const route = require("./routes/route");

mongoose.connect("mongodb://localhost:27017/contactlist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () =>
  console.log(`connected to database mongodb @ 27017`)
);
mongoose.connection.on("error", (err) => {
  if (err) console.log(`error in database connection : ${err}`);
});

app.use(cors());
app.use(bodyparser.json());
app.use("/api", route);
app.get("/", (req, res) => res.send(`Hello`));

app.listen(port, () => console.log(`Server started at port: ${port}`));
