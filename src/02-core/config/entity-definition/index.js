import { DOMAIN_TYPES } from "../../const";

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
    someCheckbox: {
        label: "Some checkbox",
        domain: DOMAIN_TYPES.DO_LIST
    },
    someRadio: {
        label: "Some radio",
        domain: DOMAIN_TYPES.DO_ID
    }
};
