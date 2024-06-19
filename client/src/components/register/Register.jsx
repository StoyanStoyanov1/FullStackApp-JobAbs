export default function Register() {
	return (
		<main>
			<section id="register-page">
				<article className="register-page-container">
					<form action="#" method="" className="register-page-form">
						<h2>Register</h2>
						<p>Join us and find the perfect job.</p>

						<label htmlFor="email">Email:</label>
						<input type="text" id="email" placeholder="petar@abv.bg" name="email" />

						<label htmlFor="password">Password:</label>
						<input type="password" id="password" placeholder="******" name="password" />

						<label htmlFor="repeat-password">Repeat Password:</label>
						<input type="password" id="repeat-password" placeholder="******" name="repeat-password" />

						<label htmlFor="description">Briefly describe your skills:</label>
						<input type="text" id="description" placeholder="Experience with HTML 5, CSS 3, Node.js" name="description" />

						<article className="register-page-button">
							<button className="btn-register">Register</button>
						</article>

						<article className="account">
							<p>Already have an account? <a href="#">Sign in</a></p>
						</article>
					</form>

					<article className="register-page-image">
						{/* Do not forget to change the path to the image */}
						<img src="./static/img/job.png" alt="image" />
					</article>
				</article>
			</section>
		</main>
	);
}
