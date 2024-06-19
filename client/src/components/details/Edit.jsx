export default function Edit() {
	return (
		<main>

			<section id="edit-page">

				<article className="edit-page-container">
					<form action="#" method="" className="edit-page-form">
						<h2>Edit an ad</h2>

						<label htmlFor="headline">Headline:</label>
						<input type="text" id="headline" name="headline" value=""/>

							<label htmlFor="location">Location:</label>
							<input type="text" id="location" name="location" value=""/>

								<label htmlFor="company-name">Company name:</label>
								<input type="text" id="company-name" name="company-name" value=""/>

									<label htmlFor="company-description">Company description:</label>
									<input type="text" id="company-description" name="company-description" value=""/>

										<article className="edit-page-button">
											<button className="btn-edit-ads">Edit</button>
										</article>
					</form>

					<article className="edit-page-image">
						<img src={`${process.env.PUBLIC_URL}/img/job.png`} alt="image"/>
					</article>
				</article>

			</section>
		</main>

)
}