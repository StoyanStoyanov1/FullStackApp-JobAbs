const mongoose = require('mongose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	}
})

userSchema.pre('save', async function (next) {
	this.password = await bcrypt.hash(this.password, 12);

	next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;