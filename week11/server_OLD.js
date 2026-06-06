const express = require('express');
const app = express();

const users = [{ id: 1, name: 'Alice' }];

app.get('/user/:id', (req, res) => {
    try {
        const user = users.find(u => u.id === parseInt(req.params.id));
        
        if (!user) {
            throw new Error('Database search failed for ID: ' + req.params.id);
        }
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error: " + err.message);
    }
});


app.get('/user/:id', (req, res) => {
    try {
        const user = users.find(u => u.id === parseInt(req.params.id));
        
        if (!user) {
            throw new Error('Database search failed for ID: ' + req.params.id);
        }
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error: " + err.message);
    }
});
app.listen(3000);