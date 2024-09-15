// index.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const questionRoutes = require("./routes/questionRoutes");
const optionRoutes = require("./routes/optionRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use("/api", questionRoutes);
app.use("/api", optionRoutes);

// Connect to database
connectDB();

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
