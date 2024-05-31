const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

const users = []; // This should be a database in a real application

router.post('/user/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, email, password: hashedPassword });

    const token = jwt.sign({ name, email }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(201).json({ message: 'User created successfully', token });
});

module.exports = router;
