const buildOptions = (data) => {
	const options = {};

	if (data) {
		options.body = JSON.stringify(data);
		options.headers = {'content-type': 'application/json'};
	}

	const token = localStorage.getItem('accessToken');

	if (token) {
		options.headers = {
			...options.headers,
			Authorization: `Bearer ${token}`,
		}
	}

	return options;
}

export default async function request(method, url, data) {
	const response = await fetch(url, {
		method,
		...buildOptions(data),
		credentials: 'include',
	});

	if (response.status === 204) {
		return { ok: true };
	}

	const result = await response.json();

	if (response.ok) {
		return { ok: true, ...result };
	} else {
		return { ok: false, ...result };
	}
}
