const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const users = [];
const PORT = 3000;
const SECRET_KEY = 'your_secret_key'; // Change this to a secure key in production

app.use(bodyParser.json());

// Register endpoint
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).send('User registered');
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user) return res.status(404).send('User not found');
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).send('Invalid password');
    const token = jwt.sign({ username }, SECRET_KEY);
    res.json({ token });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
