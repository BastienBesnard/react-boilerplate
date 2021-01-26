import React from "react";
import "./App.scss";

// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Samples
import Menu from "./02-modules/menu";
import ModuleSample from "./02-modules/z-module1";
import Module2Sample from "./02-modules/z-module2";
import ClassComponent from "./01-core/components/z-class-component/ClassComponent";
import FunctionalComponent from "./01-core/components/z-functional-component/FunctionalComponent";

function App() {
    return (
        <Router>
            <div>
                <Menu />
                <nav my-app="app">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/a">A</Link>
                        </li>
                        <li>
                            <Link to="/b">B</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/a">
                        <Module2Sample />
                    </Route>
                    <Route path="/b"></Route>
                    <Route path="/">
                        <div className="title">{"Hello world!"}</div>
                        <ClassComponent myProp="prop class component" />
                        <ClassComponent />
                        <FunctionalComponent myProp="prop functional component" />
                        <FunctionalComponent />
                        <ModuleSample myProp="prop module sample" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
