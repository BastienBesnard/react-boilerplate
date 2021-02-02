import React from "react";

// Components - Navigation
import Tabs from "../../02-core/components/core/navigation/tabs";
import Link from "../../02-core/components/core/navigation/link";
// Components - Other
import Section from "../../02-core/components/section";

const propTypes = {};

const defaultProps = {};

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Section title={"Navigation"}>
                <Tabs />
                <Link
                    label="Link label"
                    handleClick={() => console.log("Link clicked!")}
                />
            </Section>
        );
    }
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
Navigation.displayName = "Navigation";

export default Navigation;
