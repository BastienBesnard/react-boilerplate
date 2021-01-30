import React from "react";

// Components - Feedback
import Progress from "../../02-core/components/feedback/progress";
import Dialog from "../../02-core/components/feedback/dialog";
import Snackbar from "../../02-core/components/feedback/snackbar";
import Backdrop from "../../02-core/components/feedback/backdrop";

import Button from "../../02-core/components/inputs/button";

const propTypes = {};

const defaultProps = {};

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false
        };
    }
    handleDialogChange(isDialogOpen) {
        this.setState({ isDialogOpen });
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <Snackbar
                        open
                        severity={"success"}
                        message={"some message"}
                    />
                </div>
                <div>
                    <Button
                        label="Modal"
                        onClick={() => this.handleDialogChange(true)}
                    />
                </div>
                <div>
                    <Dialog
                        title={"Some title"}
                        handleClose={() => this.handleDialogChange(false)}
                        open={this.state.isDialogOpen}
                        content={"Some content"}
                    />
                </div>
                <div>
                    <Progress />
                </div>
                <div>
                    <Backdrop />
                </div>
            </React.Fragment>
        );
    }
}

Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
Feedback.displayName = "Feedback";

export default Feedback;
