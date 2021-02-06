import FIELD_TYPES from "../../const/field-types";
import Text from "../../components/core/inputs/text";

export default {
    getComponent: () => Text,
    symbol: "€",
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
            type: FIELD_TYPES.TEXT,
            ...otherProps
        };
    },
    validate: function () {
        return true;
    },
    format: function (value) {
        return value;
    },
    unformat: function (value) {
        return value;
    }
};
