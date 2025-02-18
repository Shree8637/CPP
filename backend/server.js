// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Initialize Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS for frontend communication

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/Project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Define User Schema for storing user credentials
const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Define History Schema for storing user login history
const HistorySchema = new mongoose.Schema({
  username: String,
  action: String,
  timestamp: { type: Date, default: Date.now },
});

// Create Models from Schemas
const User = mongoose.model("User", UserSchema);
const History = mongoose.model("History", HistorySchema);

// API: User Signup
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if user already exists
    if (await User.findOne({ username })) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    
    res.json({ message: "✅ User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "❌ Error registering user" });
  }
});

// API: User Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find user in database
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "User not found" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ username }, "secretkey", { expiresIn: "1h" });

    // Save login action to user history
    await new History({ username, action: "User logged in" }).save();

    res.json({ message: "✅ Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "❌ Login error" });
  }
});

// API: Fetch User Login History
app.get("/history/:username", async (req, res) => {
  try {
    const history = await History.find({ username: req.params.username }).sort({ timestamp: -1 });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: "❌ Error fetching history" });
  }
});

// Start Express server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
