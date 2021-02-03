import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiRadio from "@material-ui/core/Radio";

const propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    checked: PropTypes.bool
};

const defaultProps = {
    onChange: () => {},
    checked: false
};

function Radio({ value, onChange, checked }) {
    return (
        <MuiRadio
            name="test"
            value={value}
            onChange={onChange}
            label="Female"
            checked={checked}
        />
    );
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.displayName = "Radio";

export default Radio;
