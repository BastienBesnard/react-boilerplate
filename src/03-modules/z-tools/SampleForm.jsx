import React from "react";

// Components - Form
import { Form, Field, FIELD_TYPES } from "../../02-core/components/form";

const propTypes = {};

const defaultProps = {};

class FormSample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values, { setSubmitting }) {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 4000);
    }
    render() {
        return (
            <Form
                title="Form"
                initialValues={{
                    someText1: "",
                    someText2: "",
                    someCheckbox: false
                }}
                onSubmit={this.handleSubmit}
                edit
            >
                {(props) => (
                    <React.Fragment>
                        <Field // TODO: Add field validator, formater/unformater
                            type={FIELD_TYPES.TEXT} // TODO: Add type in variable shared in the app ?
                            name={"someText1"}
                            label={"Some text 1"}
                            {...props}
                        />
                        <Field
                            type={FIELD_TYPES.TEXT}
                            name={"someText2"}
                            label={"Some text 2"}
                            {...props}
                        />
                        <Field
                            type={FIELD_TYPES.CHECKBOX}
                            name={"someCheckbox"}
                            label={"Some checkbox"}
                            {...props}
                        />
                    </React.Fragment>
                )}
            </Form>
        );
    }
}

FormSample.propTypes = propTypes;
FormSample.defaultProps = defaultProps;
FormSample.displayName = "Form sample";

export default FormSample;
