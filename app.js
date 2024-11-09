const express = require('express');
const app = express();


const isPrime = (number) => {
    if (number <= 1) {
        return false; 
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }

    return true; 
};

// Endpoint to check if a number is prime
app.get('/assignments/prime/:number', (req, res) => {
    const number = parseInt(req.params.number);  

    // Validate the input
    if (isNaN(number)) {
        return res.status(400).json({ error: 'Please provide a valid number.' });
    }


    const result = isPrime(number);
    res.json({ number: number, isPrime: result });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
