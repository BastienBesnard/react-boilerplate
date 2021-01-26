import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiLink from "@material-ui/core/Link";

const propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

const defaultProps = {};

function Link({ label, handleClick }) {
    return <MuiLink onClick={handleClick}>{label}</MuiLink>;
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
Link.displayName = "Link";

export default Link;
