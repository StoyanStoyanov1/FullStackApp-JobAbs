const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authService = require('./service/authService');

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.post('/register', async (req, res) => {
	const {email, password, description} = req.body;
	console.log(email, password, description);
	try {
		await authService.register({email, password, description});
	} catch (error) {
		console.log(error);
	}
})

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

mongoose.connect('mongodb://localhost:27017/jobs');

mongoose.connection.on('connected', () => console.log('MongoDB Connected'));
mongoose.connection.on('disconnected', () => console.log('MongoDB Disconnected'));
mongoose.connection.on('error', (err) => console.log(err));

app.listen(5000, () => console.log('Server is running on port 5000'));