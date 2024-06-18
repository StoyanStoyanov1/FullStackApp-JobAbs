import {Route, Routes, useNavigate} from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";

import Path from "./paths";

function App() {
  return (
      <div className="box">
        <Header/>
          <Routes>
              <Route path={Path.Home} element={<Home/>}/>
          </Routes>
      </div>
  );
}

export default App;
