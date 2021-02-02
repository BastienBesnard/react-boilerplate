import React from "react";
import PropTypes from "prop-types";

// Components
import Text from "../core/inputs/text";
import Checkbox from "../core/inputs/checkbox";

// Const
import { FIELD_TYPES } from "./const";

const propTypes = {
    type: PropTypes.oneOf(
        Object.keys(FIELD_TYPES).map((key) => FIELD_TYPES[key])
    ),
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    edit: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const defaultProps = {};

function Field({ name, label, type, edit, handleChange, values, errors }) {
    let res = null;
    switch (type) {
        case FIELD_TYPES.TEXT:
            res = (
                <Text
                    label={label}
                    type={type}
                    value={values[name]}
                    onChange={handleChange(name)}
                    error={errors[name]}
                    helperText={errors[name]}
                    edit={edit}
                />
            );
            break;
        case FIELD_TYPES.CHECKBOX:
            res = (
                <Checkbox
                    label={label}
                    checked={values[name]}
                    onChange={handleChange(name)}
                    edit={edit}
                />
            );
            break;
        default:
            res = <div>{"Unhandled field type."}</div>;
    }
    return res;
}

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;
Field.displayName = "Field";

export default Field;
