const User = require("./models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
	const userData = req.body;
	try {
		const user = await User.findOne({email: userData.email});

		if (user) {
			return res.status(400).json({message: 'User already exists'});
		}

		const createUser = await User.create(userData);

		const token = await generateToken(createUser);

		res.cookie('authToken', token, {
			_id: createUser._id,
			email: createUser.email,
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 2 * 60 * 60 * 1000
		});

		return res.status(201).json({message: 'User registered successfully', token});
	} catch (error) {
		return res.status(500).json({message: `Registration failed: ${error.message}`});
	}
};

async function generateToken(user) {
	const payload = {
		_id: user._id,
		username: user.username,
		email: user.email,
	};

	const token = jwt.sign(payload, 'thatIsSecretKey', {expiresIn: '2h'});

	return token;
}
