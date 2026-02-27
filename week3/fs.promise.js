const fs = require('fs').promises;

fs.readFile('text.txt', 'utf8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error("Error:", err.message);
    });