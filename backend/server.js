const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/leads", require("./routes/leadRoutes"));
app.use("/api/search", require("./routes/searchRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});