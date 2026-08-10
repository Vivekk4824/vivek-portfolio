const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Vivek Portfolio API is running"
  });
});

// Resume routes
const resumeRoutes = require("./routes/resumeRoutes");

app.use("/api/resume", resumeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});