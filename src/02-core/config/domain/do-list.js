import FIELD_TYPES from "../../const/field-types";
import CheckboxFieldset from "../../components/core/inputs/checkbox-fieldset";

export default {
    getComponent: (type) =>
        type === FIELD_TYPES.CHECKBOX
            ? CheckboxFieldset
            : CheckboxFieldset /* TODO: add select */,
    buildProps: function (
        { name, label, value, onChange, helperText, error, edit },
        otherProps
    ) {
        return {
            name,
            label,
            valueList: value,
            onChange,
            helperText,
            error,
            edit,
            ...otherProps
        };
    },
    validate: function () {},
    format: function () {},
    unformat: function () {}
};
