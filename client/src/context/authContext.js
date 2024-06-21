import {createContext, useState} from 'react'
import {useNavigate} from "react-router-dom";

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from "../paths";

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({children}) => {
	const navigate = useNavigate();

	const [auth, setAuth] = usePersistedState('authToken', {});

	const registerSubmitHandler = async (values) => {
		try {
			const result = await authService.register(values.email, values.password, values.description);
			setAuth(result);
			navigate(Path.Home);
		} catch (err) {
			console.error(err);
		}
	};


	const values = {
		registerSubmitHandler,
		email: auth.email,
		_id: auth._id,
		isAuthenticated: !!auth.email,
	};

	return (
		<AuthContext.Provider value={values}>
			{children}
		</AuthContext.Provider>
	)
};

export default AuthContext;