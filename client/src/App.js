import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Searched from "./pages/Searched";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

function App() {

  return (
    <Router>
       
        <main className="container-md">
            <Route exact path="/" component={Searched} />
            <Route exact path="/saved" component={Saved} />
        </main>
        
    </Router>
);
}

export default App;
