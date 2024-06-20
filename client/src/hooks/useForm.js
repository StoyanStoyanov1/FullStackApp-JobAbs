import {useState} from 'react';
import {register} from "../services/authService";

export default function useForm(submitHandler, initialValues) {
	const [values, setValues] = useState({initialValues});

	const onChange = (e) => {
		setValues(state => ({
			...state,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		register(values.email, values.password, values.description);
	};

	return {
		values,
		onChange,
		onSubmit,
	}
}