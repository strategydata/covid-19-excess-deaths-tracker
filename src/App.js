import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <AppHeader className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </AppHeader>
        <InfoDetail></InfoDetail>
        <MapView></MapView>
      </div>
    </Router>
  );
}

export default App;
