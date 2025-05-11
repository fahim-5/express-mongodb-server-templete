const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Load environment variables
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Test route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: '🚫 Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
