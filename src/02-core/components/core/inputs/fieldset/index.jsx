import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    valueList: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    helperText: PropTypes.string,
    edit: PropTypes.bool,
    Component: PropTypes.func.isRequired
};

const defaultProps = {
    onChange: () => {},
    helperText: undefined,
    edit: false
};

class Fieldset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.computeValueList = this.computeValueList.bind(this);
    }
    computeValueList(id, checked) {
        const { valueList, onChange } = this.props;
        const index = valueList.findIndex((e) => e === id);
        let newList = [...valueList];

        if (checked && index < 0) {
            newList.push(id);
        } else if (!checked && index > -1) {
            newList.splice(index, 1);
        }

        return onChange(newList);
    }

    render() {
        const {
            name,
            label,
            list,
            valueList,
            helperText,
            edit,
            Component
        } = this.props;
        return (
            <div className="c-fieldset">
                <legend>{label}</legend>
                {list.map((o) => (
                    <Component
                        key={o.id}
                        id={name + "-" + o.id}
                        name={name}
                        label={o.label}
                        checked={valueList.findIndex((id) => id === o.id) > -1}
                        onChange={(event) => {
                            this.computeValueList(o.id, event.target.checked);
                        }}
                        edit={edit}
                    />
                ))}
                {helperText /* TODO: use helper component */}
            </div>
        );
    }
}

Fieldset.propTypes = propTypes;
Fieldset.defaultProps = defaultProps;
Fieldset.displayName = "Fieldset";

export default Fieldset;
