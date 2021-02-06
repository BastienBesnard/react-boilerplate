import DOMAIN_TYPES from "../../const/domain-types";

import DO_LABEL from "./do-label";
import DO_AMOUNT from "./do-amount";
import DO_DATE from "./do-date";
import DO_ID from "./do-id";
import DO_BOOLEAN from "./do-boolean";
import DO_LIST from "./do-list";

export default {
    [DOMAIN_TYPES.DO_LABEL]: DO_LABEL,
    [DOMAIN_TYPES.DO_AMOUNT]: DO_AMOUNT,
    [DOMAIN_TYPES.DO_DATE]: DO_DATE,
    [DOMAIN_TYPES.DO_ID]: DO_ID,
    [DOMAIN_TYPES.DO_BOOLEAN]: DO_BOOLEAN,
    [DOMAIN_TYPES.DO_LIST]: DO_LIST
};
