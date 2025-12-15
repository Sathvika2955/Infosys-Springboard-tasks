const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const slotRoutes = require("./routes/slotroutes");

// API routes
app.use("/api/auth", authRoutes);
app.use("/api", slotRoutes);

// MongoDB connection
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://parking:parking123@cluster0.thuzccq.mongodb.net/?appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
