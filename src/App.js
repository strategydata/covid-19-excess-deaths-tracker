import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import './App.css';
import {  Routes, Route, Router } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

function App() {

  return (
      <div className="App">
        <Navbar />
        <div className='container'>
          {/* <Alert /> */}
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            {/* <Route exact path="/user/:login" component={User} /> */}
            <Route path="/404" component={NotFound} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
