export default function AllJobs() {
	return (
		<main>

			<section id="all-ads-page">
				<article className="all-ads-title">
					<h1>All ads</h1>
				</article>
				<article className="all-ads-card">
					<article className="all-ads-card-image">
						<img src="./static/img/job-icon1.png" alt="job-icon"/>
					</article>

					<article className="all-ads-card-content">
						<h2>UI / UX Designers</h2>
						<h3>Company Name: Digital Solutions</h3>
						<article className="all-ads-card-content-item">
							<img src="./static/img/map-icon.png"/>
								<p>Location 210-27 Sofia, Market Street, Bulgaria</p>
						</article>
					</article>

					<article className="all-ads-card-buttons">
						<a href="#" className="btn-details">Details</a>
					</article>
				</article>

				<article className="all-ads-card">
					<article className="all-ads-card-image">
						<img src="./static/img/job-icon1.png" alt="job-icon"/>
					</article>

					<article className="all-ads-card-content">
						<h2>Front-End Developer</h2>
						<h3>Company Name:search-page-no-result-message</h3>
						<article className="all-ads-card-content-item">
							<img src="./static/img/map-icon.png"/>
								<p>Location Ruse, Market Street, Bulgaria</p>
						</article>
					</article>

					<article className="all-ads-card-buttons">
						<a href="#" className="btn-details">Details</a>
					</article>
				</article>

			
			</section>
		</main>

)
}