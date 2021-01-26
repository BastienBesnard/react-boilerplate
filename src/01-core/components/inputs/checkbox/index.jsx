import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiCheckbox from "@material-ui/core/Checkbox";

const propTypes = {
    checked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
};

const defaultProps = {};

function Checkbox({ checked, handleChange }) {
    return <MuiCheckbox checked={checked} onChange={handleChange} />;
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.displayName = "Checkbox";

export default Checkbox;
