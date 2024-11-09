const express = require('express');
const app = express();


const factorial = (number) => {
    if (number < 0) {
        return 'Error: Factorial is not defined for negative numbers';
    }
    
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
};


app.get('/assignments/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number);  


    if (isNaN(number)) {
        return res.status(400).json({ error: 'Please provide a valid number.' });
    }


    const result = factorial(number);
    res.json({ number: number, factorial: result });
});


const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
