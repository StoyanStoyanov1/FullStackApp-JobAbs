import {Link} from "react-router-dom";
import Path from '../../paths'
export default function Login() {
	return (
		<main>

			<section id="login-page">

				<article className="login-page-container">

					<form  method="post" className="login-page-form">
						<h2>Login</h2>
						<p>Welcome, see the new ads!</p>

						<label htmlFor="email">Email:</label>
						<input type="text" id="email" placeholder="petar@abv.bg" name="email"/>

							<label htmlFor="password">Password:</label>
							<input type="password" id="password" placeholder="******" name="password"/>

								<article className="login-page-button">
									<button className="btn-login">Login</button>
								</article>

								<article className="no-account">
									<p>Don't have an account? <Link to={Path.Register}>Sign up</Link></p>
								</article>
					</form>

					<article className="login-page-image">
						<img src={`${process.env.PUBLIC_URL}/img/job.png`} alt="job-image"/>
					</article>
				</article>

			</section>
		</main>
	)
}