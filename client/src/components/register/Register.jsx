import { Link } from "react-router-dom";
import Path from "../../paths";
import useForm from "../../hooks/useForm";
import authContext from "../../context/authContext";
import { useContext } from "react";

const registerFormKeys = {
	Email: "email",
	Password: "password",
	PasswordConfirm: "passwordConfirm",
	Description: "description",
};

export default function Register() {
	const { registerSubmitHandler } = useContext(authContext);

	const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
		[registerFormKeys.Email]: '',
		[registerFormKeys.Password]: '',
		[registerFormKeys.PasswordConfirm]: '',
		[registerFormKeys.Description]: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (values[registerFormKeys.Password] !== values[registerFormKeys.PasswordConfirm]) {
			alert("Passwords do not match!");
			return;
		}

		onSubmit(e);
	};

	return (
		<main>
			<section id="register-page">
				<article className="register-page-container">
					<form onSubmit={handleSubmit} className="register-page-form">
						<h2>Register</h2>
						<p>Join us and find the perfect job.</p>

						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							placeholder="petar@abv.bg"
							name={registerFormKeys.Email}
							onChange={onChange}
							value={values[registerFormKeys.Email]}
						/>

						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							placeholder="******"
							name={registerFormKeys.Password}
							onChange={onChange}
							value={values[registerFormKeys.Password]}
						/>

						<label htmlFor="repeat-password">Repeat Password:</label>
						<input
							type="password"
							id="repeat-password"
							placeholder="******"
							name={registerFormKeys.PasswordConfirm}
							onChange={onChange}
							value={values[registerFormKeys.PasswordConfirm]}
						/>

						<label htmlFor="description">Briefly describe your skills:</label>
						<input
							type="text"
							id="description"
							placeholder="Experience with HTML 5, CSS 3, Node.js"
							name={registerFormKeys.Description}
							onChange={onChange}
							value={values[registerFormKeys.Description]}
						/>

						<article className="register-page-button">
							<button type="submit" className="btn-register">Register</button>
						</article>

						<article className="account">
							<p>Already have an account? <Link to={Path.Login}>Sign in</Link></p>
						</article>
					</form>

					<article className="register-page-image">
						<img src={`${process.env.PUBLIC_URL}/img/job.png`} alt="job image" />
					</article>
				</article>
			</section>
		</main>
	);
}
