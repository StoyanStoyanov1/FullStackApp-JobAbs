const User = require("./models/User");

exports.register = async (userData) => {
	const user = await User.findOne({ email: userData.email });

	if (user) {
		throw new Error('User already exists');
	}

	const createUser = await User.create(userData);

}