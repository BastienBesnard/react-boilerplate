// React
import React from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
// Actions
import { addCounter, loadNameInformation } from './action';

const propTypes = {
    counter: PropTypes.number,
    nameInformation: PropTypes.object,
    addCounter: PropTypes.func.isRequired,
    loadNameInformation: PropTypes.func.isRequired
};

const defaultProps = {
    counter: 0,
    nameInformation: {}
};

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { loadNameInformation} = this.props;
        this.setState({value: event.target.value});
        loadNameInformation(event.target.value, 'test2');
      }
    render() {
        const { counter, nameInformation, addCounter } = this.props;

        return (
            <div my-app='class-component'>
                <div>{'Counter ' + counter}</div>
                <div onClick={() => {addCounter();}}>{"click to increment"}</div>
                <br />
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <div>{'Async nameInformation name' + nameInformation.name}</div>
                <div>{'Async nameInformation age' + nameInformation.age}</div>
            </div>
        );
    }
}

ClassComponent.propTypes = propTypes;
ClassComponent.defaultProps = defaultProps;
ClassComponent.displayName = 'Class component with store';

const mapStateToProps = (state /*, ownProps*/) => {
    console.log('mapStateToProps', state)
    const { counterReducer } = state;
    return {
      counter: counterReducer.counter,
      nameInformation: counterReducer.quote
    }
};
  
const mapDispatchToProps = { addCounter, loadNameInformation };

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent);