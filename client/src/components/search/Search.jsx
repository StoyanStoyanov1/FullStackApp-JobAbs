export default function Search() {
	return (
		<main>

			<form className="search" action="" method="">
				<input type="search" name="search" value="" placeholder="Search email..."/>
				<button type="submit" className="btn-search">
					<img src={`${process.env.PUBLIC_URL}/img/search-icon.png`} alt="search-icon"/>
					Search
				</button>
			</form>

			<section id="search-page">

				<h2>Search result:</h2>
				<article className="search-page-result">
					<p className="search-page-result-headline">Headline: Frond End Developer</p>
					<p className="search-page-result-companyName">Company Name: WebCam</p>
				</article>

				<article className="search-page-result">
					<p className="search-page-result-headline">Headline: UI / UX Designers</p>
					<p className="search-page-result-companyName">Company Name: Digital Solutions</p>
				</article>

			</section>

		</main>

	)
}