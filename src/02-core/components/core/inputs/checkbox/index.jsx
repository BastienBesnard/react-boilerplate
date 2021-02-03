import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiCheckbox from "@material-ui/core/Checkbox";

// Style
import "./index.scss";

const propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    // TODO
    //helperText: PropTypes.string,
    //required: PropTypes.bool,
    //error: PropTypes.bool,
    edit: PropTypes.bool
};

const defaultProps = {
    id: undefined,
    checked: false,
    onChange: () => {},
    // TODO
    //helperText: undefined,
    //required: false,
    //error: false,
    edit: false
};

function Checkbox({ id, name, label, checked, onChange, edit }) {
    return (
        <div className="c-checkbox">
            <MuiCheckbox
                id={id}
                name={name}
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
