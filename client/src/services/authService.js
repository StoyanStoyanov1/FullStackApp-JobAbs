import request from "../lib/request";

const baseUrl = 'http://localhost:5000'

export const register = async (email, password, description) => {
	const result = await request('POST', `${baseUrl}/register`, {
		email,
		password,
		description,
	});

	if (result.ok) {
		return result.user;
	} else {
		throw new Error(result.message);
	}
};

export const logout = async () => {
	return request('GET', `${baseUrl}/logout`);
}