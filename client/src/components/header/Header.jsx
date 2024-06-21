import Path from "../../paths";
import {Link, NavLink, useParams} from "react-router-dom";

export default function Header() {
	const setActive = ({ isActive }) => isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link";

	return (
		<header className="header">
			<article className="header-logo">
				<img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" className="logo"/>
			</article>
			<nav className="header-nav">
				<ul className="header-nav-list">
					<li className="header-nav-list-item">
						<NavLink to={Path.Home} className={setActive}>Home Page</NavLink>
					</li>
					<li className="header-nav-list-item">
						<NavLink to={Path.AllJobs} className={setActive}>All ads</NavLink>
					</li>
					<li className="header-nav-list-item">
						<NavLink to={Path.Create} className={setActive}>Create Ad</NavLink>
					</li>
					<li className="header-nav-list-item">
						<NavLink to={Path.Search} className={setActive}>Search</NavLink>
					</li>
					<li className="header-nav-list-item">
						<Link to={Path.Logout} className="header-nav-list-item-link">Logout</Link>
					</li>
					<li className="header-nav-list-item">
						<NavLink to={Path.Register} className={setActive}>Register</NavLink>
					</li>
					<li className="header-nav-list-item">
						<NavLink to={Path.Login} className={setActive}>Login</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
