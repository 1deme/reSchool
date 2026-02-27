const fs = require('fs').promises;

async function readFileExample() {
    const data = await fs.readFile('text.txt', 'utf8');
    console.log(data);
}

readFileExample();