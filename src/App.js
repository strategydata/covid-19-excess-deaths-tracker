import Navbar from "./components/layout/Navbar";
// import Alert from "./components/layout/Alert";
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Map from "./components/pages/Map";
function App() {

  return (
      <div className="App">
        <Navbar />
        <div className='container'>
          {/* <Alert /> */}
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/map" component={Map} />
            {/* <Route exact path="/user/:login" component={User} /> */}
            <Route path="/404" component={NotFound} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
