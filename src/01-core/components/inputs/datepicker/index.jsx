import React from "react";
import PropTypes from "prop-types";

// Material-ui
//import { KeyboardDatePicker } from "@material-ui/pickers";

const propTypes = {
    label: PropTypes.string.isRequired,
    format: PropTypes.string,
    value: PropTypes.any,
    handleChange: PropTypes.func.isRequired
};

const defaultProps = {
    format: "MM/dd/yyyy"
};

function Datepicker(/*{ label, format, value, handleChange }*/) {
    return (
        <div>{"TODO: Datepicker"}</div>
        /*<KeyboardDatePicker
            label={label}
            format={format}
            value={value}
            onChange={handleChange}
        />*/
    );
}

Datepicker.propTypes = propTypes;
Datepicker.defaultProps = defaultProps;
Datepicker.displayName = "Datepicker";

export default Datepicker;
