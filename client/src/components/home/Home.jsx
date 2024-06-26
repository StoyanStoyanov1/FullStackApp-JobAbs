export default function Home() {
	return (
		<main>

			<section id="home-page">
				<article className="home-page-content">
					<h1>Find The Job That Fits Your Life</h1>
					<p>On this site, you can find hundreds of job offers, do not hesitate, and apply now.</p>
					<a href="#" className="view-all-ads">View all ads</a>
				</article>
				<article className="home-page-image">
					<img src="./static/img/man.png" alt="man"/>
				</article>
			</section>

			<section className="intro">
				<article className="intro-left-side">
					<article className="intro-left-side-image">
						<img src="./static/img/people-group.png" alt="people"/>
					</article>
					<article className="intro-left-side-text">
						<h1>You're Looking for Trending Jobs!</h1>
						<h2>See the first three ads you applied for.</h2>
					</article>
				</article>

				<article className="intro-symbol">
					<img src="./static/img/strip-square.png" alt="strip-square"/>
				</article>

				<article className="intro-right-side">
					<article className="intro-right-side-content">
						<img src="./static/img/technology.png" alt="technology"/>
							<h5>
								Front End Developer
								<span>Candidates: 2</span>
							</h5>
					</article>

					<article className="intro-right-side-content">
						<img src="./static/img/technology.png" alt="technology"/>
							<h5>
								Teacher
								<span>Candidates: 1</span>
							</h5>
					</article>

					<article className="intro-right-side-content">
						<img src="./static/img/technology.png" alt="technology"/>
							<h5>
								<span>Candidates: 0</span>
							</h5>
					</article>
					
				</article>
			</section>
		</main>
	)
}