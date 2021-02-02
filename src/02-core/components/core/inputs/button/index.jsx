import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiButton from "@material-ui/core/Button";

// Components
import Icon from "../../data-display/icon";

const TYPES = {
    BUTTON: "button",
    SUBMIT: "submit"
};

const propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf([TYPES.BUTTON, TYPES.SUBMIT]),
    icon: PropTypes.string
};

const defaultProps = {
    onClick: () => {},
    type: TYPES.BUTTON,
    icon: null
};

function Button({ label, onClick, type, icon }) {
    let props = { onClick, type };
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
