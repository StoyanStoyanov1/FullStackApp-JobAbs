const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/api/hello', (req, res) => {
	const receivedData = req.body;
	console.log('Received Data: ', receivedData);

	res.json({message: 'Data received successfully', data: receivedData});
});


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(5000, () => console.log('Server is running on port 5000'))