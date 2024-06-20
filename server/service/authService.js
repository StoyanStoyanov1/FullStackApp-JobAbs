const User = require("./models/User");

exports.register = async (userData) => {
	if (!userData.email || !userData.password) {
		throw new Error('Email and password are required');
	}

	try {
		const user = await User.findOne({ email: userData.email });

		if (user) {
			throw new Error('User already exists');
		}

		const createUser = await User.create(userData);

		return createUser;
	} catch (error) {
		throw new Error(`Registration failed: ${error.message}`);
	}
}
