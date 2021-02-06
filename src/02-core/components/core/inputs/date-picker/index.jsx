import React from "react";
import PropTypes from "prop-types";

// Material-ui
import TextField from "@material-ui/core/TextField";

import FIELD_TYPES from "../../../../const/field-types";

const propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
    /*helperText,
    error,
    edit*/
};

const defaultProps = {
    value: ""
};

function DatePicker({ name, label, value, onChange }) {
    return (
        <TextField
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            type={FIELD_TYPES.DATE}
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
