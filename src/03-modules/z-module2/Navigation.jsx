import React from "react";

// Components - Navigation
import Tabs from "../../02-core/components/navigation/tabs";
import Link from "../../02-core/components/navigation/link";

const propTypes = {};

const defaultProps = {};

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Tabs />
                <Link
                    label="Link label"
                    handleClick={() => console.log("Link clicked!")}
                />
            </div>
        );
    }
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
Navigation.displayName = "Navigation";

export default Navigation;
