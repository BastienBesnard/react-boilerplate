import React from "react";
import PropTypes from "prop-types";

// React router
import { NavLink } from "react-router-dom";

// Material-ui
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";

// Components
import Icon from "../../data-display/icon";

const propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

const defaultProps = {};

const useStyles = makeStyles(() => ({
    buttonBase: { display: "block" }
}));

function Item({ icon, title, path }) {
    const classes = useStyles();
    return (
        <div className="c-sidebar-item">
            <NavLink
                exact={path === "/"}
                to={path}
                activeClassName="c-sidebar-item__active"
                className="c-sidebar-link"
            >
                <ButtonBase className={classes.buttonBase} component="div">
                    <div className="c-sidebar-link__content">
                        <div className="c-sidebar-link__content-logo">
                            <Icon>{icon}</Icon>
                        </div>
                        <div className="c-sidebar-link__content-title">
                            {title}
                        </div>
                    </div>
                </ButtonBase>
            </NavLink>
        </div>
    );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
Item.displayName = "Item";

export default Item;
