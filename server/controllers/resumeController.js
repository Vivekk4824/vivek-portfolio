const fs = require("fs");
const path = require("path");

const resumeDirectory = path.join(
  __dirname,
  "../uploads/resumes"
);

// Download latest resume
const getResume = (req, res) => {
  if (!fs.existsSync(resumeDirectory)) {
    return res.status(404).json({
      message: "Resume directory not found"
    });
  }

  const files = fs
    .readdirSync(resumeDirectory)
    .filter((file) => file.endsWith(".pdf"));

  if (files.length === 0) {
    return res.status(404).json({
      message: "Resume not found"
    });
  }

  const latestResume = files
    .map((file) => ({
      file,
      time: fs.statSync(
        path.join(resumeDirectory, file)
      ).mtime
    }))
    .sort((a, b) => b.time - a.time)[0];

  res.download(
    path.join(resumeDirectory, latestResume.file),
    "Vivek-Patil-Resume.pdf"
  );
};

// Upload resume
const uploadResume = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "No resume uploaded"
    });
  }

  res.json({
    message: "Resume uploaded successfully",
    filename: req.file.filename
  });
};

module.exports = {
  getResume,
  uploadResume
};