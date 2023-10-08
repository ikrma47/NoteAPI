const express = require("express");
require("./models/notes")();
require("dotenv").config();

const app = express();
app.use(express.json());


app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({
    data: [],
    message: "Something went wrong",
  });
});
// home route
app.get("/", (req, res) => {
  return res.json({
    status: "API is working",
    message: "Welcome to Note API",
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Listening on port ", process.env.PORT || 3000)
);
