import DatePicker from "../../components/core/inputs/date-picker";

export default {
    getComponent: () => DatePicker,
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
