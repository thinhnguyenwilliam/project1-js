const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const routeClient = require('./routes/client/index.route');

const app = express();

// Middleware
app.use(express.json());

// Routes
routeClient.index(app);

// MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/express-mvc', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB:', err));

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
