import React from "react";
import PropTypes from "prop-types";

import logo from "../../01-assets/img/sample.svg";

// Router
import { Switch, Route } from "react-router-dom";

// Translate
import { withTranslation } from "../../02-core/utils/i18n";

// Components
import AppBar from "../../02-core/components/navigation/app-bar";
import Sidebar from "../../02-core/components/navigation/sidebar";

// Samples
import ModuleSample from "../z-module";
import Tools from "../z-tools";

// Style
import "./index.scss";

const translationPrefix = "menu.";

const propTypes = {
    translate: PropTypes.func.isRequired
};

const defaultProps = {};

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.computeButtonList = this.computeButtonList.bind(this);
    }
    computeButtonList() {
        const { translate } = this.props;
        return [
            {
                path: "/",
                exact: true,
                title: translate(translationPrefix + "home"),
                icon: "home",
                Component: () => <div>{"TODO"}</div>
            },
            {
                path: "/tools",
                title: translate(translationPrefix + "tools"),
                icon: "skateboarding",
                Component: <Tools />
            },
            {
                path: "/module",
                title: translate(translationPrefix + "module"),
                icon: "paragliding",
                Component: () => {
                    return <ModuleSample />;
                }
            },
            {
                path: "/404",
                title: translate(translationPrefix + "404"),
                icon: "engineering",
                Component: () => <div>{"TODO 404"}</div>
            }
        ];
    }
    render() {
        const { translate } = this.props;
        const buttonList = this.computeButtonList();
        return (
            <div className="o-menu">
                <div className="o-menu__sidebar">
                    <Sidebar logo={logo} buttonList={buttonList} />
                </div>
                <div className="o-menu__main">
                    <div className="o-menu__main-header">
                        <AppBar
                            title={translate(translationPrefix + "appTitle")}
                        />
                        {/* TODO: Put title in translation file */}
                    </div>
                    <main className="o-menu__main-content">
                        <Switch>
                            {buttonList.map((o) => (
                                <Route
                                    key={o.title}
                                    path={o.path}
                                    exact={o.exact}
                                >
                                    {o.Component}
                                </Route>
                            ))}
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

export default withTranslation()(Menu);
