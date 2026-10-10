const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const uploadResume = require(
  "../middleware/uploadMiddleware"
);
const { requireAdmin } = require(
  "../middleware/authMiddleware"
);

const resumePath = path.join(
  __dirname,
  "../uploads/resume.pdf"
);

// ================================
// DOWNLOAD RESUME
// ================================

router.get("/", (req, res) => {
  if (!fs.existsSync(resumePath)) {
    return res.status(404).json({
      message: "Resume not uploaded yet"
    });
  }

  res.download(
    resumePath,
    "Vivek-Patil-Resume.pdf"
  );
});

// ================================
// UPLOAD / REPLACE RESUME
// ================================

router.post(
  "/upload",
  requireAdmin,
  uploadResume.single("resume"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a PDF resume"
      });
    }

    res.json({
      message: "Resume uploaded successfully",
      filename: req.file.filename
    });
  }
);

module.exports = router;