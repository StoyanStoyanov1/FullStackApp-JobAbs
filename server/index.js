const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authService = require('./service/authService');
const authController = require('./controllers/authController');

const app = express();

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use(authController)

mongoose.connect('mongodb://localhost:27017/jobs', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('connected', () => console.log('MongoDB Connected'));
mongoose.connection.on('disconnected', () => console.log('MongoDB Disconnected'));
mongoose.connection.on('error', (err) => console.log(err));

app.listen(5000, () => console.log('Server is running on port 5000'));