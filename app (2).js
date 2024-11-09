// Import the Express module
const express = require('express');
const app = express();

// Function to generate the Fibonacci sequence up to n terms
const generateFibonacci = (n) => {
    const sequence = [0, 1]; // Starting values for the Fibonacci sequence
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]); // Add next Fibonacci number
    }
    return sequence;
};

// Create the GET endpoint to return the Fibonacci sequence
app.get('/assignments/fibonacci/:n', (req, res) => {
    const n = parseInt(req.params.n); // Get 'n' from the URL parameters
    
    // If 'n' is invalid (not a positive number), return an error
    if (isNaN(n) || n <= 0) {
        return res.status(400).json({ error: 'Please provide a valid positive number for n.' });
    }

    // Generate the Fibonacci sequence for the provided 'n'
    const fibonacciSequence = generateFibonacci(n);

    // Return the Fibonacci sequence as a JSON response
    res.json({ sequence: fibonacciSequence });
});

// Start the server on port 9090
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
