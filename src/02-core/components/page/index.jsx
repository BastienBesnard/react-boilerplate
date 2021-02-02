import React from "react";
import PropTypes from "prop-types";

// Components
import Hidden from "../core/layout/hidden";
import AppBar from "./app-bar";
import Sidebar from "./sidebar";

// Style
import "./index.scss";

const propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    buttonList: PropTypes.array.isRequired,
    children: PropTypes.object.isRequired
};

const defaultProps = {};

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isSidebarOpen: false };
        this.handleSidebar = this.handleSidebar.bind(this);
        this.renderSidebar = this.renderSidebar.bind(this);
        this.renderMain = this.renderMain.bind(this);
    }
    handleSidebar(isSidebarOpen) {
        console.log("isSidebarOpen", isSidebarOpen);
        this.setState({ isSidebarOpen });
    }
    renderSidebar(isDesktop) {
        const { logo, buttonList } = this.props;
        const { isSidebarOpen } = this.state;
        const props = isDesktop ? { smDown: true } : { mdUp: true };
        return (
            <Hidden {...props}>
                <div
                    className={
                        isDesktop
                            ? "c-page__sidebar-desktop"
                            : "c-page__sidebar-mobile"
                    }
                >
                    <Sidebar
                        logo={logo}
                        buttonList={buttonList}
                        handleClose={() => this.handleSidebar(false)}
                        open={isDesktop || isSidebarOpen}
                        isDesktop={isDesktop}
                    />
                </div>
            </Hidden>
        );
    }
    renderMain(isDesktop) {
        const { title, children } = this.props;
        const props = isDesktop ? { smDown: true } : { mdUp: true };
        return (
            <Hidden {...props}>
                <div className="c-page__main">
                    <div className="c-page__main-header">
                        <AppBar
                            title={title}
                            onClick={() => this.handleSidebar(true)}
                        />
                    </div>
                    <main className="c-page__main-content">{children}</main>
                </div>
            </Hidden>
        );
    }
    render() {
        return (
            <div className="c-page">
                {this.renderSidebar(true)}
                {this.renderSidebar(false)}
                {this.renderMain(true)}
                {this.renderMain(false)}
            </div>
        );
    }
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
Page.displayName = "Page";

export default Page;
