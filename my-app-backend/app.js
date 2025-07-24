/**
 * Express application setup with middleware and routes.
 */

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const githubRoutes = require("./routes/githubRoutes");

const app = express();

app.use(helmet()); // Secure headers
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON bodies

// Mount GitHub API routes at /api/github
app.use("/api/github", githubRoutes);

// Basic root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the GitHub Explorer API");
});

module.exports = app;
