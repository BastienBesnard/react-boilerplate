// React
import React from "react";
import PropTypes from "prop-types";
// Style
import "./index.scss";
// Redux
import { connect } from "react-redux";
// Actions
import { addCounter, loadNameInformation } from "./actions";
// Components
import Button from "../../01-core/components/inputs/button";
import Text from "../../01-core/components/inputs/text";

const mapStateToProps = (state /*, ownProps*/) => {
    const { counterReducer } = state;
    return {
        counter: counterReducer.counter,
        nameInformation: counterReducer.quote
    };
};
const mapDispatchToProps = { addCounter, loadNameInformation };

const propTypes = {
    myProp: PropTypes.string,
    counter: PropTypes.number.isRequired,
    nameInformation: PropTypes.object.isRequired,
    addCounter: PropTypes.func.isRequired,
    loadNameInformation: PropTypes.func.isRequired
};

const defaultProps = {
    myProp: "default prop module sample"
};

class MyModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        const { loadNameInformation } = this.props;
        this.setState({ value });
        loadNameInformation(value, "test2");
    }
    render() {
        const { myProp, counter, nameInformation, addCounter } = this.props;
        const { value } = this.state;
        const { age } = nameInformation;
        return (
            <div className="o-module1">
                <div>{"My prop:" + myProp}</div>
                <br />
                <Button label={"Click to increment"} onClick={addCounter} />
                <br />
                <Button
                    label={"Click to increment"}
                    onClick={addCounter}
                    icon="send"
                />
                <br />
                <div>{"Counter: " + counter}</div>
                <br />
                <Text
                    label="Some text label"
                    value={value}
                    onChange={this.handleChange}
                />
                <div>{"Age: " + (age || "-")}</div>
            </div>
        );
    }
}

MyModule.propTypes = propTypes;
MyModule.defaultProps = defaultProps;
MyModule.displayName = "Module 1";

export default connect(mapStateToProps, mapDispatchToProps)(MyModule);
