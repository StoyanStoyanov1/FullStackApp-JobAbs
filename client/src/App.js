import {Route, Routes, useNavigate} from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import AllJobs from "./components/allJobs/AllJobs";

import Path from "./paths";

function App() {
  return (
      <div className="box">
        <Header/>
          <Routes>
              <Route path={Path.Home} element={<Home/>}/>
              <Route path={Path.AllJobs} element={<AllJobs/>}/>
          </Routes>
          <Footer/>

      </div>
  );
}

export default App;
