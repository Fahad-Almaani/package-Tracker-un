import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Pages/Home/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/home"/>
          <Route element={<Home/>} path="/login"/>
          <Route element={<Home/>} path="/signup"/>
        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
