import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    myProp: PropTypes.string
};

const defaultProps = {
    myProp: 'default prop class component'
};

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myStateValue: 'my state value'
        };
    }
    render() {
        const { myProp } = this.props;
        const { myStateValue } = this.state;
        return (
            <div my-app='class-component'>
                {myProp}
                {myStateValue}
            </div>
        );
    }
}

ClassComponent.propTypes = propTypes;
ClassComponent.defaultProps = defaultProps;

export default ClassComponent;