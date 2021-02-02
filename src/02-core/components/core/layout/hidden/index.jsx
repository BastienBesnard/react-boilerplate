import React from "react";

// Material-ui
import MuiHidden from "@material-ui/core/Hidden";

const propTypes = {};

const defaultProps = {};

function Hidden(props) {
    return <MuiHidden {...props} />;
}

Hidden.propTypes = propTypes;
Hidden.defaultProps = defaultProps;
Hidden.displayName = "Hidden";

export default Hidden;
