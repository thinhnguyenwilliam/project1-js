const express = require('express');
require('dotenv').config();
const connectDB = require('./config/database');
const routeAdmin = require('./routes/admin/index.route');
const routeClient = require('./routes/client/index.route');


const app = express();

// Middleware
app.use(express.json());

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
