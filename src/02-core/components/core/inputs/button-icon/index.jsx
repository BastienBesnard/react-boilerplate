import React from "react";
import PropTypes from "prop-types";

// Material-ui
import IconButton from "@material-ui/core/IconButton";

// Components
import Icon from "../../data-display/icon";

const propTypes = {
    icon: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    edge: PropTypes.oneOf(["start", "end", false])
};

const defaultProps = {
    edge: false
};

function ButtonIcon({ icon, ariaLabel, onClick, edge }) {
    return (
        <IconButton
            color="inherit"
            aria-label={ariaLabel}
            onClick={onClick}
            edge={edge}
        >
            <Icon>{icon}</Icon>
        </IconButton>
    );
}

ButtonIcon.propTypes = propTypes;
ButtonIcon.defaultProps = defaultProps;
ButtonIcon.displayName = "Button icon";

export default ButtonIcon;
