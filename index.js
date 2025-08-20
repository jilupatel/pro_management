const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Import routes
const projectRoutes = require('./routes/Projects');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/projects', projectRoutes);

app.listen(5000, (req, res) => {
    console.log("mongodb listen at port 5000")
})
