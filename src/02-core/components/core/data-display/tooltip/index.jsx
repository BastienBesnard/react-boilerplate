import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiTooltip from "@material-ui/core/Tooltip";

const propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};

const defaultProps = {};

function Tooltip({ title, children }) {
    return <MuiTooltip title={title}>{children}</MuiTooltip>;
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
Tooltip.displayName = "Tooltip";

export default Tooltip;
