import React from "react";

// Components - Feedback
import Progress from "../../02-core/components/core/feedback/progress";
import Dialog from "../../02-core/components/core/feedback/dialog";
import Snackbar from "../../02-core/components/core/feedback/snackbar";
import Backdrop from "../../02-core/components/core/feedback/backdrop";
// Components - Other
import Section from "../../02-core/components/section";
import Button from "../../02-core/components/core/inputs/button";

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
            <Section title={"Feedback"}>
                <div>
                    <Snackbar
                        open
                        severity={"success"}
                        message={"Some snackbar"}
                    />
                </div>
                <div>
                    <Button
                        label="Dialog"
                        onClick={() => this.handleDialogChange(true)}
                    />
                </div>
                <div>
                    <Dialog
                        title={"Some dialog"}
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
            </Section>
        );
    }
}

Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
Feedback.displayName = "Feedback";

export default Feedback;
