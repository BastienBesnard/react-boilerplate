import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiButton from "@material-ui/core/Button";

// Components
import Icon from "../../data-display/icon";
import Progress from "../../feedback/progress";

// Style
import "./index.scss";

const TYPES = {
    BUTTON: "button",
    SUBMIT: "submit"
};

const propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf([TYPES.BUTTON, TYPES.SUBMIT]),
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    progress: PropTypes.bool
};

const defaultProps = {
    onClick: () => {},
    type: TYPES.BUTTON,
    icon: null,
    disabled: false,
    progress: false
};

function Button({ label, onClick, type, icon, disabled, progress }) {
    let buttonProps = { onClick, type, disabled };
    if (icon) {
        buttonProps.startIcon = <Icon>{icon}</Icon>;
    }
    return (
        <div className={"c-button" + (progress ? " c-button-loading" : "")}>
            <MuiButton variant="outlined" {...buttonProps}>
                {label}
            </MuiButton>
            {progress && (
                <div className="c-button-loading__progress">
                    <Progress size={24} />
                </div>
            )}
        </div>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.displayName = "Button";

export default Button;
