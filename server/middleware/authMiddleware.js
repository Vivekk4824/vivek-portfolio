const requireAdmin = (req, res, next) => {
  const adminKey = process.env.ADMIN_KEY;

  if (!adminKey) {
    console.error("ADMIN_KEY is not configured in the environment variables.");
    return res.status(500).json({ message: "Server configuration error." });
  }

  // Check headers for authorization or a custom admin-key header
  const providedKey = req.headers['x-admin-key'] || req.headers.authorization?.replace('Bearer ', '');

  if (!providedKey) {
    return res.status(401).json({ message: "Missing credentials" });
  }

  if (providedKey !== adminKey) {
    return res.status(403).json({ message: "Invalid credentials" });
  }

  next();
};

module.exports = { requireAdmin };
