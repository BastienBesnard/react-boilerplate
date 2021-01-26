import React from "react";

// Components - Navigation
import Drawer from "../../01-core/components/navigation/drawer";
import Link from "../../01-core/components/navigation/link";

import Button from "../../01-core/components/inputs/button";

const propTypes = {};

const defaultProps = {};

class Navigation extends React.Component {
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
        return (
            <div>
                <Link
                    label="Link label"
                    handleClick={() => console.log("Link clicked!")}
                />
                <Button
                    label="Drawer"
                    onClick={() => this.toggleDrawer(true)}
                />
                <Drawer
                    open={this.state.isDrawerOpen}
                    toggleDrawer={() => this.toggleDrawer(false)}
                />
            </div>
        );
    }
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
Navigation.displayName = "Navigation";

export default Navigation;
