import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiDrawer from "@material-ui/core/Drawer";

const propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired
};

const defaultProps = {};

function Drawer({ isOpen, toggleDrawer }) {
    return (
        <MuiDrawer
            anchor={"left"}
            open={isOpen}
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
