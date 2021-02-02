import { DOMAIN_NAMES } from "../../02-core/components/form/const";

export const sampleDto = {
    someText1: {
        label: "Some text 1",
        domain: DOMAIN_NAMES.DO_LABEL,
        required: true
    },
    someText2: {
        label: "Some text 2",
        domain: DOMAIN_NAMES.DO_LABEL
    },
    someCheckbox: {
        label: "Some checkbox",
        domain: DOMAIN_NAMES.DO_BOOLEAN
    }
};
