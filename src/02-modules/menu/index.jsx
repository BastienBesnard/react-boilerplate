import React from "react";
//import PropTypes from "prop-types";

// Components
import AppBar from "../../01-core/components/app-bar";
import Drawer from "../../01-core/components/drawer";

const propTypes = {};

const defaultProps = {};

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
    }
    toggleDrawer(isDrawerOpen) {
        this.setState({ isDrawerOpen });
    }
    render() {
        const { isDrawerOpen } = this.state;
        return (
            <div>
                <AppBar onMenuClick={() => this.toggleDrawer(true)} />
                <Drawer
                    isOpen={isDrawerOpen}
                    toggleDrawer={this.toggleDrawer}
                />
            </div>
        );
    }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.displayName = "Menu";

export default Menu;
