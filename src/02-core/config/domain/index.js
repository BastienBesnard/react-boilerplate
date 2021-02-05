// Components
import Text from "../../components/core/inputs/text";
import Checkbox from "../../components/core/inputs/checkbox";
import RadioFieldset from "../../components/core/inputs/radio-fieldset";
import CheckboxFieldset from "../../components/core/inputs/checkbox-fieldset";

import { DOMAIN_TYPES } from "../../const";

const FIELD_TYPES = {
    TEXT: "text"
};

export default {
    [DOMAIN_TYPES.DO_LABEL]: {
        getComponent: () => Text,
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
        getComponent: () => Checkbox,
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
        validate: function () {},
        format: function () {},
        unformat: function () {}
    },
    /*[DOMAIN_TYPES.DO_AMOUNT]: {
    },*/
    [DOMAIN_TYPES.DO_ID]: {
        getComponent: () => RadioFieldset,
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
                edit
            };
        },
        validate: function () {},
        format: function () {},
        unformat: function () {}
    },
    [DOMAIN_TYPES.DO_LIST]: {
        getComponent: () => CheckboxFieldset,
        buildProps: function ({
            name,
            label,
            value,
            setFieldValue,
            helperText,
            error,
            edit
        }) {
            return {
                name,
                label,
                valueList: value,
                onChange: (value) => setFieldValue(name, value),
                helperText,
                error,
                edit
            };
        },
        validate: function () {},
        format: function () {},
        unformat: function () {}
    }
};
