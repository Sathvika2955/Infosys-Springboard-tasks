const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const slotRoutes = require("./routes/slotroutes");

app.use("/api", slotRoutes);



app.use(cors());
app.use(express.json()); // REQUIRED
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./models/User")); 


// Connect to MongoDB (replace with your own URI or use environment variable)
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://parking:parking123@cluster0.thuzccq.mongodb.net/?appName=Cluster0";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
