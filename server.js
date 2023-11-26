// Using the Fetch API to make an HTTP GET request to the API
fetch('https://api.example.com/data')
  .then(response => response.json())  // assuming the API returns JSON data
  .then(data => {
    console.log('Data from API:', data);
  })
  .catch(error => console.error('Error fetching data from API:', error));


  // Assuming you have a server endpoint for fetching data from the database
fetch('/api/database')
.then(response => response.json())
.then(databaseData => {
  // Process the data from the database
  console.log('Data from Database:', databaseData);
})
.catch(error => console.error('Error fetching data from Database:', error));

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'farooq',
  password: '8767',
  database: 'my_db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})


const express = require('express');
const app = express();

// Assuming you have a route for fetching data from the database
app.get('/api/database', (req, res) => {
  // Query the database and send the data as JSON
  const databaseData = //... your logic to fetch data from the database
  res.json(databaseData);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Bash Code
//npm install express nodemailer

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Mock database data
const getEnergyConsumptionFromAPI = () => {
  // Your logic to fetch energy consumption from the API
  return /* ... */;
};

// Email configuration using nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',  // replace with your email
    pass: 'your-email-password',   // replace with your email password
  },
});

// API endpoint to check and notify about energy consumption
app.get('/api/check-energy-consumption', async (req, res) => {
  try {
    const energyConsumption = getEnergyConsumptionFromAPI();
    
    // Set your threshold limit
    const thresholdLimit = 100;

    if (energyConsumption > thresholdLimit) {
      // Send email notification
      const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'user-email@example.com',  // replace with the user's email
        subject: 'Exceeded Energy Consumption',
        text: `Your energy consumption has exceeded the sustainable limit. Current consumption: ${energyConsumption} MW.`,
      };

      await transporter.sendMail(mailOptions);
    }

    res.json({ success: true, message: 'Energy consumption checked successfully.' });
  } catch (error) {
    console.error('Error checking energy consumption:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

connection.end()



// Bash Code
//node server.js