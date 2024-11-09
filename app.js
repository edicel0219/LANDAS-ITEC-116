const express = require('express');
const app = express();


const getFibonacci = (n) => {
    if (n <= 1) return n;
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};


const generateFibonacciSequence = (n) => {
    const sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(getFibonacci(i));
    }
    return sequence;
};


app.get('/assignments/fibonacci/number/:n', (req, res) => {
    const n = parseInt(req.params.n);  
    
    // Validate the input
    if (isNaN(n) || n < 0) {
        return res.status(400).json({ error: 'Please provide a valid non-negative integer for n.' });
    }


    const fibonacciNumber = getFibonacci(n);
    res.json({ fibonacciNumber: fibonacciNumber });
});


app.get('/assignments/fibonacci/sequence/:n', (req, res) => {
    const n = parseInt(req.params.n); 
    
 
    if (isNaN(n) || n <= 0) {
        return res.status(400).json({ error: 'Please provide a valid positive integer for n.' });
    }

  
    const fibonacciSequence = generateFibonacciSequence(n);
    res.json({ sequence: fibonacciSequence });
});


const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
