const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/database');
const routeAdmin = require('./routes/admin/index.route');
const routeClient = require('./routes/client/index.route');


const app = express();

// Middleware
app.use(express.json());

// Use CORS middleware
app.use(cors({
  origin: 'http://example.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allow cookies or Authorization headers
}));


// Connect to MongoDB
connectDB();

// Routes
routeAdmin.index(app);
routeClient.index(app);


// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
