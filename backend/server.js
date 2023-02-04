const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res, next) => {
  res.json({ asdf: [1, 2, 3] });
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
