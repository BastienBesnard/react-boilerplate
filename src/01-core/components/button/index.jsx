import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiButton from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import "./index.scss";

const propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.string
};

const defaultProps = {
    icon: null
};

function Button({ label, onClick, icon }) {
    let props = { onClick };
    if (icon) {
        props.startIcon = <Icon>{icon}</Icon>;
    }
    return (
        <MuiButton variant="outlined" {...props}>
            {label}
        </MuiButton>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.displayName = "Button";

export default Button;
