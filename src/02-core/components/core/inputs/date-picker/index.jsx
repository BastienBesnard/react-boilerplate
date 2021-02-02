import React from "react";
import PropTypes from "prop-types";

// Material-ui
import TextField from "@material-ui/core/TextField";

const propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

const defaultProps = {
    value: ""
};

function DatePicker({ label, value, onChange }) {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            type="date"
            InputLabelProps={{
                shrink: true
            }}
        />
    );
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;
DatePicker.displayName = "Date";

export default DatePicker;
