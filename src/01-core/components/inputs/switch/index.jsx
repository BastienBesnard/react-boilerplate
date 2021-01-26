import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiSwitch from "@material-ui/core/Switch";

const propTypes = {
    checked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
};

const defaultProps = {};

function Switch({ checked, handleChange }) {
    return <MuiSwitch checked={checked} onChange={handleChange} />;
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
Switch.displayName = "Switch";

export default Switch;
