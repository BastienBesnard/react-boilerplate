import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiDrawer from "@material-ui/core/Drawer";

const propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired
};

const defaultProps = {};

function Drawer({ open, toggleDrawer }) {
    return (
        <MuiDrawer
            anchor={"left"}
            open={open}
            onClose={() => toggleDrawer(false)}
        >
            {"TODO"}
        </MuiDrawer>
    );
}

Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;
Drawer.displayName = "Drawer";

export default Drawer;
