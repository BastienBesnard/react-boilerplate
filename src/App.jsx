import React from "react";
import "./App.scss";

// React router
import { BrowserRouter as Router } from "react-router-dom";

// Material-ui
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./02-core/config/material-ui";

// Components
import Menu from "./03-modules/menu";

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Menu />
            </ThemeProvider>
        </Router>
    );
}

export default App;
