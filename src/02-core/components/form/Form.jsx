import React from "react";
import PropTypes from "prop-types";

// Translate
import { withTranslation } from "../../utils/i18n";

// Formik
import { Formik } from "formik";

// Components
import Section from "../section";

// Const
import { DOMAINS } from "./config";

const TRANSLATION_PREFIX = "core.components.form.";

const propTypes = {
    title: PropTypes.string,
    dto: PropTypes.object.isRequired,
    edit: PropTypes.bool,
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
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
        const { title, dto, initialValues, onSubmit, children } = this.props;
        const { edit } = this.state;
        return (
            <div className="c-form">
                <Formik
                    initialValues={initialValues}
                    validate={(values) => {
                        const errors = {};
                        // TODO: Generic validation by type?
                        // iterate over each values or initial values?
                        if (dto["someText1"].required && !values.someText1) {
                            errors.someText1 = "field required";
                        }
                        if (
                            !DOMAINS[dto["someCheckbox"].domain].validate(
                                values.someCheckbox
                            )
                        ) {
                            alert("checkbox required");
                        }

                        return errors;
                    }}
                    onSubmit={onSubmit}
                    validateOnChange={false}
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
                                    {children({ ...obj, dto, edit })}
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
