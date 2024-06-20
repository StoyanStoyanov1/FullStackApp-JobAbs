const express = require('express');
const app = express();

const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/api/hello', (req, res) => {
	res.json({message: 'Hello from the server!'});
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(5000, () => console.log('Server is running on port 5000'))