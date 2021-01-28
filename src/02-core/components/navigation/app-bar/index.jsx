import React from "react";

import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const propTypes = {};

const defaultProps = {};

function AppBar() {
    return (
        <MuiAppBar position="static">
            <Toolbar></Toolbar>
        </MuiAppBar>
    );
}

AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;
AppBar.displayName = "AppBar";

export default AppBar;
