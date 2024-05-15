const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const router = require('./toDoRoutes');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
connectDB();
app.use(router);
const port = process.env.PORT || 5004;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
