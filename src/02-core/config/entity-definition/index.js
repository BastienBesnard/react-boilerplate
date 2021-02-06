import DOMAIN_TYPES from "../../const/domain-types";

export const sampleEntityDefinition = {
    someText1: {
        label: "Some text 1",
        domain: DOMAIN_TYPES.DO_LABEL,
        required: true
    },
    someText2: {
        label: "Some text 2",
        domain: DOMAIN_TYPES.DO_LABEL
    },
    someAmount: {
        label: "Some amount",
        domain: DOMAIN_TYPES.DO_AMOUNT
    },
    someDate: {
        label: "Some date",
        domain: DOMAIN_TYPES.DO_DATE
    },
    someCheckbox: {
        label: "Some checkbox",
        domain: DOMAIN_TYPES.DO_BOOLEAN
    },
    someCheckboxFieldset: {
        label: "Some checkbox fieldset",
        domain: DOMAIN_TYPES.DO_LIST
    },
    someRadioFieldset: {
        label: "Some radio fieldset",
        domain: DOMAIN_TYPES.DO_ID
    }
};
