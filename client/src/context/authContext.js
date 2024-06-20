import {useState} from 'react'

import * as authService from '../services/authService'


export const AuthProvider = ({children}) => {
	
	const [auth, setAuth] = useState('auth', {});

	const registerSubmitHandler = async (values) => {
		try {
			const result = await authService.register(values.email, values.password, values.description);
		} catch (err) {
			console.error(err);
		}

	}
};