import Checkbox from "../../components/core/inputs/checkbox";

export default {
    getComponent: () => Checkbox,
    buildProps: function (
        { name, label, value, onChange, helperText, error, edit },
        otherProps
    ) {
        return {
            name,
            label,
            value: name,
            checked: value,
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
