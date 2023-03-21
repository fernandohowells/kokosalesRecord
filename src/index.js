import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Set up database connection
const db = new sqlite3.Database('products.db');

// Serve static files from public directory
app.use(express.static('public'));

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const unitPrice = parseFloat(req.body.unitPrice);
  const quantity = parseInt(req.body.quantity);
  const totalPrice = unitPrice * quantity;
  const date = req.body.date;

  db.run(`INSERT INTO products (name, unitPrice, quantity, totalPrice, date)
          VALUES (?, ?, ?, ?, ?)`,
          [name, unitPrice, quantity, totalPrice, date], function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    } else {
      res.redirect('/');
    }
  });
});

// Display form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

const sqlite3 = require('sqlite3').verbose();

// Open database connection
let db = new sqlite3.Database('products.db');

// Select data
db.all(`SELECT * FROM products`, [], (err, rows) => {
  if (err) {
    return console.error(err.message);
  }
  rows.forEach(row => {
    console.log(row.id, row.name, row.unitPrice, row.quantity, row.totalPrice, row.date);
  });
});

// Close database connection
db.close();

const sqlite3 = require('sqlite3').verbose();

// Open database connection
let db = new sqlite3.Database('products.db');

// Select data
db.all(`SELECT * FROM products`, [], (err, rows) => {
  if (err) {
    return console.error(err.message);
  }
  rows.forEach(row => {
    console.log(row.id, row.name, row.unitPrice, row.quantity, row.totalPrice, row.date);
  });
});

// Close database connection
db.close();
