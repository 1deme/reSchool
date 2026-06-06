const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const app = express();

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);
app.use(cors());

const users = [{ id: 1, name: 'Alice' }];

app.get('/user/:id', (req, res, next) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return next(new Error('User not found'));
    }
    res.json(user);
});

app.use((err, req, res, next) => {
    console.error(`[${new Date().toISOString()}] ERROR: ${err.message}`);
    
    res.status(500).json({ 
        success: false, 
        message: "Internal server error. Please try again later." 
    });
});

app.listen(3000);