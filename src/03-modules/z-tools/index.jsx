// React
import React from "react";

// Components
import DataDisplay from "./DataDisplay";
import SampleForm from "./SampleForm";
import Inputs from "./Inputs";
import Feedback from "./Feedback";
import Navigation from "./Navigation";

const propTypes = {};

const defaultProps = {};

class Tools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <DataDisplay />
                <SampleForm />
                <Inputs />
                <Feedback />
                <Navigation />
            </React.Fragment>
        );
    }
}

Tools.propTypes = propTypes;
Tools.defaultProps = defaultProps;
Tools.displayName = "Tools";

export default Tools;
