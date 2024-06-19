export default function Details() {
	return (
		<main>

			<section id="details-page">
				<article className="details-gage-title">
					<h1>Details Page</h1>
				</article>
				<article className="details-page-card">

					<article className="details-page-card-image">
						<img src={`${process.env.PUBLIC_URL}/img/man.png`} alt="details-image"/>
					</article>

					<article className="details-page-card-content">
						<p>Author: petar@abv.bg</p>
						<h2>Headline: Front End Developer</h2>
						<h3>Company name: Digital Solutions</h3>
						<h4>Company description: We are a group of 4000+ web application exprets</h4>
						<h5>Location: Location Sofia, Vitosha Park, Bulgaria</h5>

						<article className="details-page-card-buttons">
						
							<a href="#" className="btn-edit">Edit</a>
							
						</article>
					</article>

				</article>
			</section>

			
			<section id="info-about-candidates">
				<h2>Candidates for this ad:</h2>
				<article className="info-about-candidates-card">
					<h2>Email: petar@abv.bg</h2>
					<h3>Description of the candidate's skills: Experience with HTML 5, CSS 3, Node.js</h3>
				</article>

				<article className="info-about-candidates-card">
					<h2>Email: ivan@abv.bg</h2>
					<h3>Description of the candidate's skills: Experience with Node.js</h3>
				</article>
			</section>-->

		</main>
	)
}