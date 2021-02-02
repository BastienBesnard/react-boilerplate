import React from "react";

// Components - Form
import { Form, Field } from "../../02-core/components/form";
import { sampleDto } from "../../02-core/dto";

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
                dto={sampleDto}
                edit
                initialValues={{
                    // TODO: Automatically compute initial values ?
                    someText1: "",
                    someText2: "",
                    someCheckbox: false
                }}
                onSubmit={this.handleSubmit}
            >
                {(props) => (
                    <React.Fragment>
                        <Field name={"someText1"} {...props} />
                        <Field name={"someText2"} {...props} />
                        <Field name={"someCheckbox"} {...props} />
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
