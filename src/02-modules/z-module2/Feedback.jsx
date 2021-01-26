import React from "react";

// Components - Feedback
import Progress from "../../01-core/components/feedback/progress";
import Dialog from "../../01-core/components/feedback/dialog";
import Snackbar from "../../01-core/components/feedback/snackbar";
import Backdrop from "../../01-core/components/feedback/backdrop";

import Button from "../../01-core/components/inputs/button";

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
            <div>
                <Snackbar open severity={"success"} message={"some message"} />
                <Button
                    label="Modal"
                    onClick={() => this.handleDialogChange(true)}
                />
                <Dialog
                    title={"Some title"}
                    handleClose={() => this.handleDialogChange(false)}
                    open={this.state.isDialogOpen}
                    content={"Some content"}
                />
                <Progress />
                <Backdrop />
            </div>
        );
    }
}

Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
Feedback.displayName = "Feedback";

export default Feedback;
