const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.post('/register', (req, res) => {
	const {email, password, description} = req.body;
	console.log(req.body);
})

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(5000, () => console.log('Server is running on port 5000'))