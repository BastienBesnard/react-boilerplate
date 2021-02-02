import React from "react";
import PropTypes from "prop-types";

// Const
import { DOMAINS } from "./config";

const propTypes = {
    name: PropTypes.string.isRequired,
    dto: PropTypes.object.isRequired,
    edit: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const defaultProps = {};

function Field({ name, dto, edit, handleChange, values, errors }) {
    const { label, domain } = dto[name];
    const { buildProps, Component } = DOMAINS[domain];
    const fieldProps = buildProps({
        label,
        value: values[name],
        onChange: handleChange(name),
        error: !!errors[name],
        helperText: errors[name],
        edit
    });
    return <Component {...fieldProps} />;
}

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;
Field.displayName = "Field";

export default Field;
