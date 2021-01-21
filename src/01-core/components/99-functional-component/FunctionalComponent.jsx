import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    myProp: PropTypes.string
};

const defaultProps = {
    myProp: 'default prop functional component'
};

function FunctionalComponent({ myProp }) {
    return (
        <div my-app='functionnal-component'>
            {myProp}
        </div>
    );
}

FunctionalComponent.propTypes = propTypes;
FunctionalComponent.defaultProps = defaultProps;
FunctionalComponent.displayName = 'Functionnal component';

export default FunctionalComponent;