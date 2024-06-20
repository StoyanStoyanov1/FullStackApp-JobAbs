import request from "../lib/request";

const baseUrl = 'http://localhost:5000'

export const register = async (email, password, description) => {
	const result = await request('POST', `${baseUrl}/register`, {
		email,
		password,
		description,
	});

	return result;
}