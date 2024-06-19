export default function Create() {
	return (
		<main>

			<section id="create-page">

				<article className="create-page-container">
					<form action="#" method="" className="create-page-form">
						<h2>Create an ad</h2>

						<label htmlFor="headline">Headline:</label>
						<input type="text" id="headline" placeholder="Front-End Developer with React" name="headLine" value=""/>

							<label htmlFor="location">Location:</label>
							<input type="text" id="location" placeholder="Ruse, Bulgaria" name="location" value=""/>

								<label htmlFor="company-name">Company name:</label>
								<input type="text" id="company-name" placeholder="Digital Solutions" name="company-name" value=""/>

									<label htmlFor="company-description">Company description:</label>
									<input type="text" id="company-description" placeholder="We are developing a web application" name="company=description" value=""/>

										<article className="create-page-button">
											<button className="btn-create">Create</button>
										</article>
					</form>

					<article className="create-page-image">
						<img src={`${process.env.PUBLIC_URL}/img/job.png`} alt="image"/>
					</article>
				</article>

			</section>
		</main>
	)
}