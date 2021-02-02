// Components
import Text from "../core/inputs/text";
import { DOMAIN_NAMES, FIELD_TYPES } from "./const";
import Checkbox from "../core/inputs/checkbox";

export const DOMAINS = {
    [DOMAIN_NAMES.DO_LABEL]: {
        Component: Text,
        buildProps: function (props) {
            return { ...props, type: FIELD_TYPES.TEXT };
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
    },
    [DOMAIN_NAMES.DO_BOOLEAN]: {
        Component: Checkbox,
        buildProps: function ({
            label,
            value,
            onChange,
            error,
            helperText,
            edit
        }) {
            return { label, checked: value, onChange, error, helperText, edit };
        },
        validate: function (value) {
            return value;
        },
        format: function () {},
        unformat: function () {}
    },
    [DOMAIN_NAMES.DO_AMOUNT]: {
        /*validate: function () {},
        format: function () {},
        unformat: function () {}*/
    }
};
