const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const router = require('./toDoRoutes');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.use(router);
const port = process.env.PORT || 5004;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
