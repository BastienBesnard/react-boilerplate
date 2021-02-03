import React from "react";

// Components - Form
import Form from "../../02-core/components/form";
import { sampleEntityDefinition } from "../../02-core/config/entity-definition";

const propTypes = {};

const defaultProps = {};

class FormSample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: true };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEdit(edit) {
        this.setState({ edit });
    }
    handleSubmit(values, { setSubmitting }) {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            this.handleEdit(false);
        }, 4000);
    }
    render() {
        const { edit } = this.state;
        const someDataFromServer = {
            someText1: "", // TODO handle someText1 = null and not "": Its is actually throwing a warning in props validation
            someText2: "Some initial value",
            someCheckbox: false
        };

        return (
            <Form
                title="Form"
                entityDefinition={sampleEntityDefinition}
                edit={edit}
                handleEdit={this.handleEdit}
                initialValues={someDataFromServer}
                onSubmit={this.handleSubmit}
            >
                {(renderField) => (
                    <React.Fragment>
                        {renderField("someText1")}
                        {renderField("someText2")}
                        {renderField("someCheckbox")}
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
