// React
import React from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";

// Translate
import { withTranslation } from "../../02-core/utils/i18n";

// Components
import Button from "../../02-core/components/inputs/button";
import Text from "../../02-core/components/inputs/text";
import ClassComponent from "../../02-core/components/z-class-component/ClassComponent";
import FunctionalComponent from "../../02-core/components/z-functional-component/FunctionalComponent";

// Style
import "./index.scss";

// Actions
import { addCounter, loadNameInformation } from "./actions";

const translationPrefix = "z-module.";

const mapStateToProps = (state /*, ownProps*/) => {
    const { sampleReducer } = state;
    return {
        counter: sampleReducer.counter,
        nameInformation: sampleReducer.quote
    };
};
const mapDispatchToProps = { addCounter, loadNameInformation };

const propTypes = {
    myProp: PropTypes.string,
    // Store
    counter: PropTypes.number.isRequired,
    nameInformation: PropTypes.object.isRequired,
    addCounter: PropTypes.func.isRequired,
    loadNameInformation: PropTypes.func.isRequired,
    // Translate
    translate: PropTypes.func.isRequired
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
        const { counter, nameInformation, addCounter, translate } = this.props;
        const { value } = this.state;
        const { age } = nameInformation;
        return (
            <div className="o-module">
                <h1>{translate(translationPrefix + "sample")}</h1>
                <div className="o-module__increment">
                    <Button
                        label={translate(translationPrefix + "increment")}
                        onClick={addCounter}
                    />
                    <div>{counter}</div>
                </div>
                <div className="o-module__age">
                    <Text
                        label={translate(translationPrefix + "name")}
                        value={value}
                        onChange={this.handleChange}
                    />
                    <div>
                        {translate(translationPrefix + "age") +
                            ": " +
                            (age || "-")}
                    </div>
                </div>
                <ClassComponent myProp="passed prop class component" />
                <ClassComponent />
                <FunctionalComponent myProp="passed prop functional component" />
                <FunctionalComponent />
            </div>
        );
    }
}

MyModule.propTypes = propTypes;
MyModule.defaultProps = defaultProps;
MyModule.displayName = "My Module";

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(MyModule));
