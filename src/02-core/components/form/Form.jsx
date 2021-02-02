import React from "react";
import PropTypes from "prop-types";

// Translate
import { withTranslation } from "../../utils/i18n";

// Formik
import { Formik } from "formik";

// Components
import Section from "../section";

const TRANSLATION_PREFIX = "core.components.form.";

const propTypes = {
    title: PropTypes.string,
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    edit: PropTypes.bool,
    // Translate
    translate: PropTypes.func.isRequired
};

const defaultProps = {
    title: "",
    edit: false
};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: this.props.edit };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.computeActionList = this.computeActionList.bind(this);
    }
    handleEdit(edit) {
        this.setState({ edit });
    }
    handleReset(handleReset) {
        this.handleEdit(false);
        handleReset();
    }
    computeActionList(handleReset, isSubmitting) {
        const { translate } = this.props;
        const { edit } = this.state;
        let res = [];

        if (edit) {
            res.push(
                {
                    label: translate(TRANSLATION_PREFIX + "save"),
                    type: "submit",
                    icon: "save",
                    disabled: isSubmitting,
                    progress: isSubmitting
                },
                {
                    label: translate(TRANSLATION_PREFIX + "cancel"),
                    type: "button",
                    onClick: () => this.handleReset(handleReset),
                    disabled: isSubmitting
                }
            );
        } else {
            res.push({
                label: translate(TRANSLATION_PREFIX + "edit"),
                type: "button",
                onClick: () => this.handleEdit(true),
                icon: "edit"
            });
        }
        return res;
    }
    render() {
        const { title, initialValues, onSubmit, children } = this.props;
        const { edit } = this.state;
        return (
            <div className="c-form">
                <Formik
                    initialValues={initialValues}
                    validate={(values) => {
                        const errors = {};
                        if (!values.someText1) {
                            // TODO: Generic validation by type?
                            errors.someText1 = "Some error";
                        }
                        return errors;
                    }}
                    onSubmit={onSubmit}
                >
                    {(obj) => {
                        const { handleSubmit, handleReset, isSubmitting } = obj;
                        return (
                            <form onSubmit={handleSubmit}>
                                <Section
                                    title={title}
                                    actionList={this.computeActionList(
                                        handleReset,
                                        isSubmitting
                                    )}
                                >
                                    {children({ ...obj, edit })}
                                </Section>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        );
    }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
Form.displayName = "Form";

export default withTranslation()(Form);
