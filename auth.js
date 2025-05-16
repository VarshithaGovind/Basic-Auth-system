const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router(); 
const User = require('../models/user');

function isStrongPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
}

router.post('/signup', async (req, res) => {
  const { name, email, mobile_number, gender, password, confirm_password } = req.body;

  if (password !== confirm_password) {
    return res.status(400).json({ msg: "Passwords do not match" });
  }

  if (!isStrongPassword(password)) {
    return res.status(400).json({ msg: "Weak password" });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      mobile_number,
      gender,
      password: hashedPassword
    });

    await user.save();
    res.status(201).json({ msg: "User registered successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});


router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    res.status(200).json({ msg: "Login successful", redirect: "/dashboard.html" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
