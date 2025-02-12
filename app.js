const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hpp = require('hpp');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./src/routes/api');

dotenv.config(); // Load environment variables

const app = express();

// Middleware setup
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(hpp());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json());

// Database Connection
const url = "mongodb+srv://devasif:devasif1234@cluster0.pbqyg.mongodb.net/Crud?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url, )
    .then(() => console.log(" Database Connected Successfully!"))
    .catch(err => console.error(err));

// Routes
app.use('/api/v1/', router);

// Handle 404 Errors
app.use("*", (req, res) => {
    res.status(404).json({ message: "No Page Found" });
});

// Export app
module.exports = app;
