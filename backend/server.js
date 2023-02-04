const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.json({ asdf: [1, 2, 3] });
});

app.listen(8000, () => {
  console.log("server started on port 8000.");
});
