import React from "react";
import PropTypes from "prop-types";

// Material-ui
import TextField from "@material-ui/core/TextField";
//import InputAdornment from "@material-ui/core/InputAdornment";

import FIELD_TYPES from "../../../../const/field-types";

// Style
import "./index.scss";

const defaultReadValue = "-";

const propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.bool,
    edit: PropTypes.bool,
    type: PropTypes.oneOf([
        FIELD_TYPES.EMAIL,
        FIELD_TYPES.NUMBER,
        FIELD_TYPES.PASSWORD,
        FIELD_TYPES.SEARCH,
        FIELD_TYPES.TEL,
        FIELD_TYPES.TEXT
    ])
};

const defaultProps = {
    value: "",
    onChange: () => {},
    helperText: undefined,
    required: false,
    error: false,
    edit: false,
    type: FIELD_TYPES.TEXT
};

function Text({
    name,
    label,
    value,
    onChange,
    helperText,
    required,
    error,
    edit,
    type
}) {
    return (
        <div className="c-text">
            <TextField
                id={name}
                name={name}
                label={label}
                value={edit ? value : value || defaultReadValue}
                onChange={onChange}
                helperText={helperText}
                required={required}
                error={error}
                type={type}
                InputLabelProps={{
                    classes: { root: !edit ? "c-text__label-read-mode" : "" }
                }}
                InputProps={{
                    disabled: !edit,
                    disableUnderline: !edit,
                    classes: { root: !edit ? "c-text__value-read-mode" : "" },
                    endAdornment: /* TODO value ? (
                        <InputAdornment position="start">Kg</InputAdornment>
                    ) : */ null
                }}
            />
        </div>
    );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
Text.displayName = "Text";

export default Text;
