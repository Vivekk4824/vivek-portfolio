const express = require("express");

const router = express.Router();

const {
  getResume,
  uploadResume
} = require("../controllers/resumeController");

const upload = require("../middleware/uploadMiddleware");

// Download current resume
router.get("/", getResume);

// Upload new resume
router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);

module.exports = router;