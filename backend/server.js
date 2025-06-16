const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/parts', require('./routes/parts'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ message: 'Vehicle Parts Inventory API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});