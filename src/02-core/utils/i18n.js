import React from "react";
import PropTypes from "prop-types";

import {
    withTranslation as withTranslationi18n // HOC (higher order component): It gets the t function and i18n instance inside your component (class ore function) via props.
} from "react-i18next";

// HOC
const propTypes = {
    t: PropTypes.func.isRequired
};
const defaultProps = {};
export function withTranslation() {
    return function Extend(Component) {
        function WrappedComponent(props) {
            return <Component {...props} translate={props.t} />;
        }
        WrappedComponent.propTypes = propTypes;
        WrappedComponent.defaultProps = defaultProps;
        WrappedComponent.displayName = "WrappedComponent";

        return withTranslationi18n()(WrappedComponent);
    };
}
