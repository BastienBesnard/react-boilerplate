import React from "react";
import "./App.scss";

// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import Menu from "./02-modules/menu";

// Samples
import ModuleSample from "./02-modules/z-module1";
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
                        <ModuleSample myProp="prop module sample" />
                    </Route>
                    <Route path="/b">
                        <div className="title">{"Hello world!"}</div>
                        <ClassComponent myProp="prop class component" />
                        <ClassComponent />
                    </Route>
                    <Route path="/">
                        <FunctionalComponent myProp="prop functional component" />
                        <FunctionalComponent />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
