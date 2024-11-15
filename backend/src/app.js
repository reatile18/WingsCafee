const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const ApiError = require("./utils/ApiError");
const ErrorHandling = require("./middlewares/ErrorHandler");

// Allow requests only from your frontend URL
app.use(cors({
  origin: 'https://wings-cafe-b4dd.vercel.app', // Frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Set to true if you're using cookies or auth headers
}));

app.use(morgan("dev"));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", require("./routes"));

// Handle undefined routes
app.use("*", (req, res) => {
    throw new ApiError(404, "Page not found");
});

// Error handling middleware
app.use(ErrorHandling);

module.exports = app;
