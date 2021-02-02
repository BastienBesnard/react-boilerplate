import React from "react";
import PropTypes from "prop-types";

// Material-ui
import Drawer from "@material-ui/core/Drawer";

// Components
import Item from "./Item";

// Style
import "./index.scss";

const propTypes = {
    logo: PropTypes.string.isRequired,
    buttonList: PropTypes.array.isRequired,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    isDesktop: PropTypes.bool.isRequired
};

const defaultProps = {
    open: true,
    handleClose: () => {}
};

function Sidebar({ logo, buttonList, open, handleClose, isDesktop }) {
    return (
        <div className="c-sidebar">
            <Drawer
                open={open}
                onClose={handleClose}
                variant={isDesktop ? "persistent" : "temporary"}
                classes={{
                    root: isDesktop ? "c-sidebar" : "c-sidebar"
                }}
            >
                <div className="c-sidebar__content">
                    <div className="c-sidebar__content-logo">
                        <img src={logo} alt="logo" onClick={() => {}} />
                    </div>
                    <nav>
                        {buttonList.map((o) => (
                            <Item key={o.title} {...o} />
                        ))}
                    </nav>
                </div>
            </Drawer>
        </div>
    );
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
Sidebar.displayName = "Sidebar";

export default Sidebar;
