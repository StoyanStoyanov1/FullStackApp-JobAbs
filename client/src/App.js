import {Route, Routes, useNavigate} from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import AllJobs from "./components/allJobs/AllJobs";
import Register from "./components/register/Register";

import Path from "./paths";
import Login from "./components/login/Login";
import Create from "./components/create/Create";
import Search from "./components/search/Search";
import Logout from "./components/logout/Logout";

import {AuthProvider} from "./context/authContext";


function App() {
	return (
		<AuthProvider>
			<div className="box">
				<Header/>
				<Routes>
					<Route path={Path.Home} element={<Home/>}/>
					<Route path={Path.AllJobs} element={<AllJobs/>}/>
					<Route path={Path.Register} element={<Register/>}/>
					<Route path={Path.Login} element={<Login/>}/>
					<Route path={Path.Create} element={<Create/>}/>
					<Route path={Path.Search} element={<Search/>}/>
					<Route path={Path.Logout} element={<Logout/>}/>
				</Routes>
				<Footer/>

			</div>
		</AuthProvider>
	);
}

export default App;
