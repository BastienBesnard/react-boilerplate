import React from "react";
import PropTypes from "prop-types";

// Component
import Checkbox from "../checkbox";

const propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    valueList: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    helperText: PropTypes.string,
    // TODO: error
    edit: PropTypes.bool
};

const defaultProps = {
    onChange: () => {},
    helperText: undefined,
    edit: false
};

class CheckboxFieldset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {
            name,
            label,
            list,
            valueList,
            helperText,
            edit,
            onChange
        } = this.props;
        return (
            <div className="c-radio-fieldset">
                <legend>{label}</legend>
                {list.map((o) => (
                    <Checkbox
                        key={o.id}
                        name={name}
                        label={o.label}
                        value={o.id.toString() /* TODO remove all to string */}
                        checked={valueList.includes(o.id.toString())}
                        onChange={onChange}
                        edit={edit}
                    />
                ))}
                {helperText /* TODO: use helper component */}
            </div>
        );
    }
}

CheckboxFieldset.propTypes = propTypes;
CheckboxFieldset.defaultProps = defaultProps;
CheckboxFieldset.displayName = "Checkbox fieldset";

export default CheckboxFieldset;
