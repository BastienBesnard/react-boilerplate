import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// Components
import Hidden from "../../core/layout/hidden";
import ButtonIcon from "../../core/inputs/button-icon";

// Style
import "./index.scss";

const propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

const defaultProps = {
    onClick: () => {}
};

function AppBar({ title, onClick }) {
    return (
        <div className="c-app-bar">
            <MuiAppBar position="static">
                <Toolbar>
                    <Hidden mdUp>
                        <div className="c-app-bar__button">
                            <ButtonIcon
                                icon="menu"
                                ariaLabel="menu"
                                edge="start"
                                onClick={onClick}
                            />
                        </div>
                    </Hidden>
                    <div className="c-app-bar__title">
                        <h3>{title}</h3>
                    </div>
                </Toolbar>
            </MuiAppBar>
        </div>
    );
}

AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;
AppBar.displayName = "AppBar";

export default AppBar;
