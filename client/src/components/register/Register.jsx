import {Link} from "react-router-dom";
import Path from "../../paths";
import useForm from "../../hooks/useForm";
import {useContext} from "react";
import {register} from "../../services/authService";

const registerFormKeys = {
	Email: "email",
	Password: "password",
	PasswordConfirm: "passwordConfirm",
	Description: "description",
}

export default function Register() {


	const {values, onChange, onSubmit} = useForm([], {
		[registerFormKeys.Email]: '',
		[registerFormKeys.Password]: '',
		[registerFormKeys.PasswordConfirm]: '',
		[registerFormKeys.Description]: '',
	});
	return (
		<main>
			<section id="register-page">
				<article className="register-page-container">
					<form onSubmit={onSubmit} className="register-page-form">
						<h2>Register</h2>
						<p>Join us and find the perfect job.</p>

						<label htmlFor="email">Email:</label>
						<input
							type="text"
							id="email"
							placeholder="petar@abv.bg"
							name="email"
							onChange={onChange}
							value={values[registerFormKeys.Email]}
						/>

						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							placeholder="******"
							name="password"
							onChange={onChange}
							value={values[registerFormKeys.Password]}
						/>

						<label htmlFor="repeat-password">Repeat Password:</label>
						<input
							type="password"
							id="repeat-password"
							placeholder="******"
							name="repeat-password"
							onChange={onChange}
							value={values[registerFormKeys.PasswordConfirm]}
						/>

						<label htmlFor="description">Briefly describe your skills:</label>
						<input
							type="text"
							id="description"
							placeholder="Experience with HTML 5, CSS 3, Node.js"
							name="description"
							onChange={onChange}
							value={values[registerFormKeys.Description]}
						/>

						<article className="register-page-button">
							<button className="btn-register">Register</button>
						</article>

						<article className="account">
							<p>Already have an account? <Link to={Path.Login}>Sign in</Link></p>
						</article>
					</form>

					<article className="register-page-image">
						<img src={`${process.env.PUBLIC_URL}/img/job.png`} alt='job image'/>
					</article>
				</article>
			</section>
		</main>
	);
}
