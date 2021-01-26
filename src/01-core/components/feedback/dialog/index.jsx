import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiDialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

const propTypes = {
    title: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    content: PropTypes.any.isRequired
};

const defaultProps = {};

function Dialog({ title, handleClose, open, content }) {
    return (
        <MuiDialog onClose={handleClose} open={open}>
            <DialogTitle>{title}</DialogTitle>
            <div>{content}</div>
        </MuiDialog>
    );
}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
Dialog.displayName = "Functionnal component";

export default Dialog;
