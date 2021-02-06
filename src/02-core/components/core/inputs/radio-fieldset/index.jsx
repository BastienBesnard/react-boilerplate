import React from "react";
import PropTypes from "prop-types";

// Component
import Radio from "../radio";

const propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    helperText: PropTypes.string,
    // TODO error
    edit: PropTypes.bool
};

const defaultProps = {
    value: null,
    onChange: () => {},
    helperText: undefined,
    edit: false
};

class RadioFieldset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {
            name,
            label,
            list,
            value,
            onChange,
            helperText,
            edit
        } = this.props;
        return (
            <div className="c-radio-fieldset">
                <legend>{label}</legend>
                {list.map((o) => (
                    <Radio
                        key={o.id}
                        name={name}
                        label={o.label}
                        value={o.id.toString()}
                        checked={value === o.id.toString()}
                        onChange={onChange}
                        edit={edit}
                    />
                ))}
                {helperText /* TODO: use helper component */}
            </div>
        );
    }
}

RadioFieldset.propTypes = propTypes;
RadioFieldset.defaultProps = defaultProps;
RadioFieldset.displayName = "RadioFieldset";

export default RadioFieldset;
