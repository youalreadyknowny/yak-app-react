const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose(); // Import the sqlite3 library

const app = express();
const port = 3001;

// Middleware to parse JSON data from requests
app.use(bodyParser.json());

// Enable CORS to allow requests from your React app
app.use(cors());

// Serve static files (e.g., React build files)
app.use(express.static('C:/Users/kaymen/yak2/yak'));

// Initialize and open the SQLite database
const db = new sqlite3.Database('mydatabase.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the database');
  }
});

// Create a table to store form submissions if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS submissions (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT,
  age INTEGER,
  phoneNumber TEXT
)`);

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, age, phoneNumber } = req.body;
  console.log('Received form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Age:', age);
  console.log('Phone Number:', phoneNumber);

  // Insert the form data into the submissions table
  const sql = 'INSERT INTO submissions (name, email, age, phoneNumber) VALUES (?, ?, ?, ?)';
  db.run(sql, [name, email, age, phoneNumber], (err) => {
    if (err) {
      console.error('Error inserting data into the database:', err.message);
      res.status(500).send('Error saving form data to the database');
    } else {
      res.send('Form submission received and saved to the database.');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  console.log(`are we online boys and are we winning? `);
});
