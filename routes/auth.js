const express = require("express");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const router = express.Router();

// Login route
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Check credentials against .env values
    if (
      email === process.env.LOGIN_EMAIL &&
      password === process.env.LOGIN_PASSWORD
    ) {
      const payload = {
        user: {
          email: email,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "24h" },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );
    } else {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
  }
);

module.exports = router;
