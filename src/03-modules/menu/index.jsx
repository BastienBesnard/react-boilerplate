import React from "react";
//import PropTypes from "prop-types";

import logo from "../../01-assets/img/sample.svg";

// Router
import { Switch, Route } from "react-router-dom";

// Components
import AppBar from "../../02-core/components/navigation/app-bar";
import Sidebar from "../../02-core/components/navigation/sidebar";

// Samples
import ModuleSample from "../z-module1";
import Module2Sample from "../z-module2";
import ClassComponent from "../../02-core/components/z-class-component/ClassComponent";
import FunctionalComponent from "../../02-core/components/z-functional-component/FunctionalComponent";

import "./index.scss";

// TODO: Put in translation file, mutualise links between button and routes
const buttonList = [
    {
        link: "/",
        title: "Home",
        icon: "home"
    },
    {
        link: "/a",
        title: "Tools",
        icon: "skateboarding"
    },
    { link: "/b", title: "B", icon: "paragliding" },
    {
        link: "/404",
        title: "404",
        icon: "engineering"
    }
];

const propTypes = {};

const defaultProps = {};

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="o-menu">
                <div className="o-menu__sidebar">
                    <Sidebar logo={logo} buttonList={buttonList} />
                </div>
                <div className="o-menu__main">
                    <div className="o-menu__main-header">
                        <AppBar title={"BASTIEN B."} />{" "}
                        {/* TODO: Put title in translation file */}
                    </div>
                    <main className="o-menu__main-content">
                        <Switch>
                            <Route path="/a">
                                <Module2Sample />
                            </Route>
                            <Route path="/b">
                                <div className="title">{"Hello world!"}</div>
                                <ClassComponent myProp="prop class component" />
                                <ClassComponent />
                                <FunctionalComponent myProp="prop functional component" />
                                <FunctionalComponent />
                                <ModuleSample myProp="prop module sample" />
                            </Route>
                            <Route path="/404">{"TODO 404"}</Route>
                            <Route path="/">{"TODO"}</Route>
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.displayName = "Menu";

export default Menu;
