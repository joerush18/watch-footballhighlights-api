const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const routes = require("./routes");
const cors = require("cors");

dotenv.config();

app.use(cors());
app.use(express.json({ limit: "8mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.use(routes);
app.get("/", (req, res) => {
  res.status(200).json({
    message,
  });
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log(`App running on PORT:${PORT}`);
});

const message = {
  "Get Reqs": {
    "get-data": "/api/get-data",
    message:
      "Random matches make post req for specific competition or team data",
  },
  "Post reqs": {
    "get-data": {
      link: "/api/post/get-data",
      message:
        "Kindly pass the id of the specific competition to get specifc matches",
    },
    "get-wlink": {
      link: "/api/post/get-wlink",
      message: "Kindly pass the link of specific match from the data.",
    },
  },
};
