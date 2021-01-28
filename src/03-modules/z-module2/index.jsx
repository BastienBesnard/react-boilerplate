import React from "react";

// Components
import Inputs from "./Inputs";
import DataDisplay from "./DataDisplay";
import Feedback from "./Feedback";
import Navigation from "./Navigation";

const propTypes = {};

const defaultProps = {};

class MyModule2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Inputs />
                <DataDisplay />
                <Feedback />
                <Navigation />
                {/* Titles/typography */}
            </div>
        );
    }
}

MyModule2.propTypes = propTypes;
MyModule2.defaultProps = defaultProps;
MyModule2.displayName = "MyModule2";

export default MyModule2;
