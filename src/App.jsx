import React from "react";
import "./App.scss";

// Router
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Menu from "./03-modules/menu";

function App() {
    return (
        <Router>
            <Menu />
        </Router>
    );
}

export default App;
