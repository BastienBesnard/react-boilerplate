import React from "react";
import PropTypes from "prop-types";

import "./ClassComponent.scss";

const propTypes = {
    myProp: PropTypes.string
};

const defaultProps = {
    myProp: "default prop class component"
};

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myStateValue: "my state value"
        };
    }
    render() {
        const { myProp } = this.props;
        const { myStateValue } = this.state;
        return (
            <div className="c-class-component">
                <div>{myProp}</div>
                <div>{myStateValue}</div>
            </div>
        );
    }
}

ClassComponent.propTypes = propTypes;
ClassComponent.defaultProps = defaultProps;
ClassComponent.displayName = "Class component";

export default ClassComponent;
