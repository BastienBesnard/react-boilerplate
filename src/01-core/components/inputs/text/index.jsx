import React from "react";
import PropTypes from "prop-types";

// Material-ui
import TextField from "@material-ui/core/TextField";

const propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool
};

const defaultProps = {
    value: "",
    error: false
};

function Input({ label, value, onChange, error }) {
    return (
        <div className="c-input">
            <TextField
                label={label}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                error={error}
            />
        </div>
    );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
Input.displayName = "Input";

export default Input;
