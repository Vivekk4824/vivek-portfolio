const express = require("express");
const router = express.Router();

const {
  getLeetCodeStats
} = require("../services/leetcodeService");

router.get("/", async (req, res) => {
  try {
    const stats = await getLeetCodeStats("Vivek_1276");

    res.json(stats);
  } catch (error) {
    console.error(
      "LeetCode API Error:",
      error.message
    );

    res.status(500).json({
      error: "Unable to fetch LeetCode stats"
    });
  }
});

module.exports = router;