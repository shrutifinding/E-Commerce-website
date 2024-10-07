const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL connection setup
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root#123', 
    database: 'data.sql' // Your DB name
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// API endpoint to get products from the database
app.get('/api/products', (req, res) => {
    connection.query('SELECT * FROM products', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
