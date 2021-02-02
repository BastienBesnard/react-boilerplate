import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiBadge from "@material-ui/core/Badge";

// Components
import Icon from "../icon";

const propTypes = {
    value: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
};

const defaultProps = {};

function Badge({ value, icon }) {
    return (
        <MuiBadge badgeContent={value} color="primary">
            <Icon>{icon}</Icon>
        </MuiBadge>
    );
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
Badge.displayName = "Badge";

export default Badge;
