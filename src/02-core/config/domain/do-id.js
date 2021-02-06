import FIELD_TYPES from "../../const/field-types";
import RadioFieldset from "../../components/core/inputs/radio-fieldset";

export default {
    getComponent: (type) =>
        type === FIELD_TYPES.RADIO
            ? RadioFieldset
            : RadioFieldset /* TODO: add select */,
    buildProps: function (
        { name, label, value, onChange, helperText, error, edit },
        otherProps
    ) {
        return {
            name,
            label,
            value,
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
