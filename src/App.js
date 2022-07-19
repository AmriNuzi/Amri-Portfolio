import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";

function App() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="app">
      <Router>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
