const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

// Register a new user
exports.register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = new User({ email, password, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',
    });

    // Return both token and user ID in the response
    res.status(200).json({ token, id: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};