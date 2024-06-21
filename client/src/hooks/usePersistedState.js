import { useState, useEffect } from 'react';

export default function usePersistedState(key, defaultValue) {
	const [state, setState] = useState(() => {
		const persistedState = localStorage.getItem(key);

		if (persistedState) {
			try {
				return JSON.parse(persistedState);
			} catch (e) {
				console.error(`Error parsing localStorage key "${key}":`, e);
				return defaultValue;
			}
		}

		return defaultValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	const setPersistedState = (value) => {
		setState(value);
	};

	return [state, setPersistedState];
}
