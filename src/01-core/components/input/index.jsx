import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const propTypes = {
    type: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired
};

const defaultProps = {
    type: "text",
    value: null
};

function Input({ type, value, onChange }) {
    return (
        <input
            className="c-input"
            type={type}
            value={value}
            onChange={onChange}
        />
    );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
Input.displayName = "Input";

export default Input;
