const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const routes = require("./routes");

dotenv.config();

app.use(express.json({ limit: "8mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.use(routes);
app.get("/", (req, res) => {
  res.status(200).json({
    "get-data": "/get-data",
    "get-wlink": "/get-wlink",
  });
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log(`App running on PORT:${PORT}`);
});
