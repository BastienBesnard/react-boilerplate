// Components
import Text from "../../components/core/inputs/text";
import Checkbox from "../../components/core/inputs/checkbox";

import { DOMAIN_TYPES } from "../../const";

const FIELD_TYPES = {
    TEXT: "text"
};

export default {
    [DOMAIN_TYPES.DO_LABEL]: {
        Component: Text,
        buildProps: function ({
            name,
            label,
            value,
            onChange,
            helperText,
            error,
            edit
        }) {
            return {
                name,
                label,
                value,
                onChange,
                helperText,
                error,
                edit,
                type: FIELD_TYPES.TEXT
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
    },
    [DOMAIN_TYPES.DO_BOOLEAN]: {
        Component: Checkbox,
        buildProps: function ({
            name,
            label,
            value,
            onChange,
            helperText,
            error,
            edit
        }) {
            return {
                name,
                label,
                checked: value,
                onChange,
                helperText,
                error,
                edit
            };
        },
        validate: function (value) {
            return value;
        },
        format: function () {},
        unformat: function () {}
    },
    [DOMAIN_TYPES.DO_AMOUNT]: {
        /*validate: function () {},
        format: function () {},
        unformat: function () {}*/
    }
};
