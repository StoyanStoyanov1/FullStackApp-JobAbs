const authService = require("../service/authService");
const path = require("path");
const router = require("express").Router();

router.post('/register', async (req, res) => {
	try {
		await authService.register(req, res);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: `Registration failed: ${error.message}` });
	}
});

router.get('/logout', (req, res) => {
	res.clearCookie('authToken');
	res.status(200).json({ message: 'Logged out successfully' });
});

router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = router;