import React from "react";
import PropTypes from "prop-types";

// Translate
import { withTranslation } from "../../utils/i18n";

// Formik
import { Formik } from "formik";

// Components
import Section from "../section";
import Field from "./Field";

// Const
import DOMAINS from "../../config/domain";

const TRANSLATION_PREFIX = "core.components.form.";

const propTypes = {
    title: PropTypes.string,
    entityDefinition: PropTypes.object.isRequired,
    edit: PropTypes.bool,
    handleEdit: PropTypes.func,
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    // Translate
    translate: PropTypes.func.isRequired
};

const defaultProps = {
    title: "",
    edit: false,
    handleEdit: () => {}
};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleReset = this.handleReset.bind(this);
        this.computeActionList = this.computeActionList.bind(this);
    }
    handleReset(handleReset) {
        const { handleEdit } = this.props;
        handleEdit(false);
        handleReset();
    }
    computeActionList(handleReset, isSubmitting) {
        const { edit, handleEdit, translate } = this.props;
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
                onClick: () => handleEdit(true),
                icon: "edit"
            });
        }
        return res;
    }
    render() {
        const {
            title,
            entityDefinition,
            edit,
            initialValues,
            onSubmit,
            children
        } = this.props;
        return (
            <div className="c-form">
                <Formik
                    initialValues={initialValues}
                    validate={(values) => {
                        const errors = {};

                        console.log("values", values);
                        // TODO: Generic validation by type?
                        // iterate over each values or initial values?
                        // Find a way to get the field list
                        // Iterate through this.refs ? and call validate function if exists ?
                        if (
                            entityDefinition["someText1"].required &&
                            !values.someText1
                        ) {
                            errors.someText1 = "field required";
                        }
                        if (
                            !DOMAINS[
                                entityDefinition["someCheckbox"].domain
                            ].validate(values.someCheckbox)
                        ) {
                            alert("checkbox required");
                        }

                        return errors;
                    }}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                >
                    {({
                        handleChange,
                        values,
                        errors,
                        handleSubmit,
                        handleReset,
                        isSubmitting
                    }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <Section
                                    title={title}
                                    actionList={this.computeActionList(
                                        handleReset,
                                        isSubmitting
                                    )}
                                >
                                    {children((name) => (
                                        <Field
                                            name={name}
                                            entityDefinition={entityDefinition}
                                            edit={edit}
                                            handleChange={handleChange}
                                            value={values[name]}
                                            error={errors[name]}
                                        />
                                    ))}
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
