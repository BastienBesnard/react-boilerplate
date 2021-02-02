import React from "react";
import PropTypes from "prop-types";

// Material-ui
import CircularProgress from "@material-ui/core/CircularProgress";

const propTypes = {
    size: PropTypes.number
};

const defaultProps = {
    size: undefined
};

function Progress({ size }) {
    return <CircularProgress size={size} />;
}

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;
Progress.displayName = "Progress";

export default Progress;
