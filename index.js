import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
import cors from "cors";

mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("connected");
});

const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = password;

  user.save().then(() => {
    res.send({
      message: "Registered",
      status: "success",
    });
  });
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne(req.body);

  // xu ly login
  if (user) {
    res.send({
      user,
      status: "success",
    });
  } else {
    res.send({
      status: "error",
      message: "Invalid email/password",
    });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
