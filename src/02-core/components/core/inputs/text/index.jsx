import React from "react";
import PropTypes from "prop-types";

// Material-ui
import TextField from "@material-ui/core/TextField";

// Style
import "./index.scss";

const propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    edit: PropTypes.bool
};

const defaultProps = {
    type: "text",
    value: "",
    onChange: () => {},
    error: false,
    helperText: undefined,
    edit: false
};

const defaultReadValue = "-";

function Text({ label, type, value, onChange, error, helperText, edit }) {
    return (
        <div className="c-text">
            <TextField
                type={type}
                label={label}
                value={edit ? value : value || defaultReadValue}
                onChange={onChange}
                error={error}
                helperText={helperText}
                InputLabelProps={{
                    classes: { root: !edit ? "c-text__label-read-mode" : "" }
                }}
                InputProps={{
                    disabled: !edit,
                    disableUnderline: !edit,
                    classes: { root: !edit ? "c-text__value-read-mode" : "" }
                }}
            />
        </div>
    );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
Text.displayName = "Text";

export default Text;
