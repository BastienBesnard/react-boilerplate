import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiCheckbox from "@material-ui/core/Checkbox";

// Style
import "./index.scss";

const propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    edit: PropTypes.bool
};

const defaultProps = {
    checked: false,
    onChange: () => {},
    edit: false
};

function Checkbox({ label, checked, onChange, edit }) {
    return (
        <div className="c-checkbox">
            <MuiCheckbox
                checked={checked}
                onChange={onChange}
                disabled={!edit}
                classes={{ root: !edit ? "c-checkbox__value-read-mode" : "" }}
            />
            <label className={edit ? "c-checkbox__label-edit-mode" : ""}>
                {label}
            </label>
        </div>
    );
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.displayName = "Checkbox";

export default Checkbox;
