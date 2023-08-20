const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT =  5000;

mongoose.connect("mongodb://127.0.0.1:27017/UserDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  username: String,
  
});
 
const User = mongoose.model("User", UserSchema);

// API route to get items from the database
app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  const username = req.body.username;

  try {
    // Check if the username already exists in the database
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      console.log("Username already exists");
      return res.json({ message: "Username already exists" });
      
    }

    // If the username doesn't exist, create a new user and save
    const newUser = new User({
      username,
    });

    await newUser.save();

    res.json({ message: "User registration successful" });
    console.log("saved user");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "User registration failed" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
