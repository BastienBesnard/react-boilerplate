import React from "react";
import PropTypes from "prop-types";

// Components
import Item from "./Item";

import "./index.scss";

const propTypes = {
    logo: PropTypes.string.isRequired,
    buttonList: PropTypes.array.isRequired
};

const defaultProps = {};

function Sidebar({ logo, buttonList }) {
    return (
        <div className="c-sidebar">
            <div className="c-sidebar__logo">
                <img src={logo} alt="logo" onClick={() => {}} />
            </div>
            <nav className="c-sidebar__nav">
                {buttonList.map((o) => (
                    <Item key={o.title} {...o} />
                ))}
            </nav>
        </div>
    );
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
Sidebar.displayName = "Sidebar";

export default Sidebar;
