import React from "react";
import PropTypes from "prop-types";

// Const
import DOMAINS from "../../config/domain";

const propTypes = {
    name: PropTypes.string.isRequired,
    entityDefinition: PropTypes.object.isRequired,
    edit: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    error: PropTypes.string
};

const defaultProps = {
    value: null,
    error: null
};

function Field({ name, entityDefinition, edit, handleChange, value, error }) {
    const { label, domain } = entityDefinition[name];
    const { buildProps, Component } = DOMAINS[domain];
    const fieldProps = buildProps({
        label,
        value,
        onChange: handleChange(name),
        error: !!error, // TODO: Better handle of errors and helperText
        helperText: error,
        edit
    });
    return <Component {...fieldProps} />;
}

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;
Field.displayName = "Field";

export default Field;
