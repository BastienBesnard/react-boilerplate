import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const propTypes = {
    title: PropTypes.string.isRequired
};

const defaultProps = {};

function AppBar({ title }) {
    return (
        <MuiAppBar position="static">
            <Toolbar>
                <h3>{title}</h3>
            </Toolbar>
        </MuiAppBar>
    );
}

AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;
AppBar.displayName = "AppBar";

export default AppBar;
