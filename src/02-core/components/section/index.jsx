import React from "react";
import PropTypes from "prop-types";

// Components
import Button from "../core/inputs/button";

import "./index.scss";

const propTypes = {
    title: PropTypes.string.isRequired,
    actionList: PropTypes.array.isRequired,
    children: PropTypes.any.isRequired
};

const defaultProps = {
    actionList: []
};

function Section({ title, actionList, children }) {
    return (
        <div className="c-section">
            <div className="c-section__header">
                <h2 className="c-section__header-title">{title}</h2>
                <div className="c-section__header-action">
                    {actionList.map((o) => (
                        <div
                            key={o.label}
                            className="c-section__header-action-button"
                        >
                            <Button {...o} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="c-section__content">{children}</div>
        </div>
    );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
Section.displayName = "Section";

export default Section;
