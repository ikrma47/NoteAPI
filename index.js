const express = require("express");
require("./models/notes")();
require("dotenv").config();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", require("./routes"));
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
