export default function Error () {
	return (
		<main>

			<section id="not-found-page">
				<article className="not-found-page-content">
					<h1>404</h1>
					<p>The Page you are looking for doesn't exist or another error occurred.</p>
					<a href="#" className="view-home-page">Home Page</a>
				</article>
				<article className="not-found-page-image">
					<!-- Do not forget to change the path to the image -->
					<img src={`${process.env.PUBLIC_URL}/img/man.png`} alt="man"/>
				</article>
			</section>

		</main>

)
}