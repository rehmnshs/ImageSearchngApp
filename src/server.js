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
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

// API route to get items from the database
app.use(express.json());
app.use(cors());
app.post("/register", async(req, res)=>{
 const newUser = new User({
    email:req.body.username,
    password:req.body.password
 });
 try {
    await newUser.save(); // Use await here to wait for the save operation to complete
    res.render("/welcome");
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
