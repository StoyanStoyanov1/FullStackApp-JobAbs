import Path from "../../paths";
import {Link} from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
			<article className="header-logo">
				<img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" className="logo"/>
			</article>
			<nav className="header-nav">
				<ul className="header-nav-list">

					<li className="header-nav-list-item active">
						<Link to={Path.Home} className="header-nav-list-item-link active">Home Page</Link>
					</li>

					<li className="header-nav-list-item">
						<Link to={Path.AllJobs} className="header-nav-list-item-link">All ads</Link>
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
						<Link to={Path.Register} className="header-nav-list-item-link">Register</Link>
					</li>
					<li className="header-nav-list-item">
						<Link to={Path.Login} className="header-nav-list-item-link">Login</Link>
					</li>
				</ul>
			</nav>
		</header>

)
}