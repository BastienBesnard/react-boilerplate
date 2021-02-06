import React from "react";
import PropTypes from "prop-types";

// Const
import DOMAINS from "../../config/domain";

const propTypes = {
    name: PropTypes.string.isRequired,
    entityDefinition: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    error: PropTypes.string,
    edit: PropTypes.bool.isRequired
};

const defaultProps = {
    value: null,
    error: null
};

function Field({
    name,
    entityDefinition,
    edit,
    handleChange,
    value,
    error,
    ...otherProps
}) {
    const { label, domain, required } = entityDefinition[name];
    const { getComponent, buildProps } = DOMAINS[domain];
    const Component = getComponent();
    const fieldProps = buildProps(
        {
            name,
            label,
            value,
            onChange: handleChange,
            error: !!error, // TODO: Better handle of errors and helperText
            helperText: error,
            edit,
            required
        },
        otherProps
    );
    return <Component {...fieldProps} />;
}

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;
Field.displayName = "Field";

export default Field;
