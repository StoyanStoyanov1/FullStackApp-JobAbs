export default function Header() {
	return (
		<header className="header">
			<article className="header-logo">
				<img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" className="logo"/>
			</article>
			<nav className="header-nav">
				<ul className="header-nav-list">

					<li className="header-nav-list-item active">
						<a href="#" className="header-nav-list-item-link active">Home Page</a>
					</li>

					<li className="header-nav-list-item">
						<a href="#" className="header-nav-list-item-link">All ads</a>
					</li>
					<li className="header-nav-list-item">
						<a href="#" className="header-nav-list-item-link">Create Ad</a>
					</li>
					<li className="header-nav-list-item">
						<a href="#" className="header-nav-list-item-link">Search</a>
					</li>
					<li className="header-nav-list-item">
						<a href="#" className="header-nav-list-item-link">Logout</a>
					</li>

					<li className="header-nav-list-item">
						<a href="#" className="header-nav-list-item-link">Register</a>
					</li>
					<li className="header-nav-list-item">
						<a href="#" className="header-nav-list-item-link">Login</a>
					</li>
				</ul>
			</nav>
		</header>

)
}