const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secret123";

module.exports = (req, res, next) => {
  let token = req.header("x-auth-token") || req.header("authorization");
  if (!token) return res.status(401).json({ message: "No token provided" });

  if (typeof token === "string" && token.startsWith("Bearer ")) token = token.slice(7).trim();

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
