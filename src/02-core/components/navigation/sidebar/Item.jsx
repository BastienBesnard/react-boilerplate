import React from "react";
import PropTypes from "prop-types";

// React router
import { NavLink } from "react-router-dom";

// Components
import Icon from "../../data-display/icon";

const propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

const defaultProps = {};

function Item({ icon, title, link }) {
    return (
        <div className="c-sidebar-item">
            <NavLink
                exact={link === "/"}
                to={link}
                activeClassName="c-sidebar-item__active"
                className="c-sidebar-link"
            >
                <div className="c-sidebar-link__content">
                    <div className="c-sidebar-link__content-logo">
                        <Icon>{icon}</Icon>
                    </div>
                    <div className="c-sidebar-link__content-title">{title}</div>
                </div>
            </NavLink>
        </div>
    );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
Item.displayName = "Item";

export default Item;
