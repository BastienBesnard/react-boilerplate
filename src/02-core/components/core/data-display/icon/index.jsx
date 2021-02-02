import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiIcon from "@material-ui/core/Icon";

const propTypes = {
    children: PropTypes.string.isRequired
};

const defaultProps = {};

function Icon({ children }) {
    return <MuiIcon>{children}</MuiIcon>;
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
Icon.displayName = "Icon";

export default Icon;
