const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;
require('dotenv').config(); 
try {
  mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
} catch (error) {
  console.log(error.message);
}
const UserSchema = new mongoose.Schema({
  username: String,
  data: [String],
});

const User = mongoose.model("User", UserSchema);

// API route to get items from the database
app.use(express.json());
app.use(cors());

// get ids
app.get("/getIDs", async (req, res) => {
  const username = req.query.username;
  // Use req.query to access query parameters

  try {
    console.log(username);
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    const ids = user.data;
    res.json({ ids });
    console.log("IDs retrieved for the user");
  } catch (error) {
    console.error("Error retrieving IDs:", error);
    res.status(500).json({ message: "Failed to retrieve IDs" });
  }
});

// end of get ids
///putting id
app.post("/putID", async (req, res) => {
  try {
    const id = req.body.id;
    const username = req.body.username;

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({ message: "User not found" });
    }
    if (user.data.includes(id)) {
      console.log("ID already exists in the user's data array");
      return res.json({
        message: "ID already exists in the user's data array",
      });
    }
    user.data.push(id);
    await user.save();
    res.json({ message: "ID added to user's data array successfully" });
    console.log("ID added to user's data array");
  } catch (error) {
    console.error("Error adding ID to user's data array:", error);
    res.status(500).json({ message: "Failed to add ID" });
  }
});
///end of id

// REGISTER functionalities
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
// END OF REG FUNCTIONALITIES

//delete func

app.delete("/delete", async (req, res) => {
  try {
    const idToDelete = req.body.id;
    const username = req.body.username;

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    // Remove the specified ID from the user's data array
    user.data = user.data.filter(id => id !== idToDelete);

    // Save the updated user data
    await user.save();

    return res.json({ message: "ID deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
});


app.get("/checkLike", async (req, res) => {
  const username = req.query.username;
  const id = req.query.id;
  // Use req.query to access query parameters

  try {
    const user = await User.findOne({ username });
    if (user.data.includes(id)) {
      console.log("ID already exists in the user's data array");
      return res.json({
        liked:true,
      });
    }
  } catch (error) {
    console.error("Error retrieving IDs:", error);
    res.status(500).json({ message: "Failed to retrieve IDs" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
