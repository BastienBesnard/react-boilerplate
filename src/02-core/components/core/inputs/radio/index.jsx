import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiRadio from "@material-ui/core/Radio";

const propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
    // TODO
    //helperText: PropTypes.string,
    //required: PropTypes.bool,
    //error: PropTypes.bool,
    //edit: PropTypes.bool
};

const defaultProps = {
    // TODO
    //helperText: undefined,
    //required: false,
    //error: false,
    //edit: false
};

function Radio({ name, label, value, checked, onChange }) {
    return (
        <div className="c-radio">
            <MuiRadio
                name={name}
                value={value}
                label={label}
                checked={checked}
                onChange={onChange}
            />
            <label className={/*edit ? "c-radio__label-edit-mode" : */ ""}>
                {label}
            </label>
        </div>
    );
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.displayName = "Radio";

export default Radio;
