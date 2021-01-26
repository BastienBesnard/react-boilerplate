import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiSnackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const propTypes = {
    open: PropTypes.bool.isRequired,
    severity: PropTypes.oneOf(["error", "warning", "info", "success"]),
    message: PropTypes.string.isRequired
};

const defaultProps = {
    severity: "info"
};

function Alert(props) {
    return <MuiAlert variant="filled" {...props} />;
}

function Snackbar({ open, severity, message }) {
    return (
        <MuiSnackbar open={open}>
            <Alert severity={severity}>{message}</Alert>
        </MuiSnackbar>
    );
}

Snackbar.propTypes = propTypes;
Snackbar.defaultProps = defaultProps;
Snackbar.displayName = "Snackbar";

export default Snackbar;
