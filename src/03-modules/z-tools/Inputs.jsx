import React from "react";

// Components - Inputs
import Button from "../../02-core/components/core/inputs/button";
import Text from "../../02-core/components/core/inputs/text";
import Checkbox from "../../02-core/components/core/inputs/checkbox";
import Radio from "../../02-core/components/core/inputs/radio";
import DatePicker from "../../02-core/components/core/inputs/date-picker";
import Select from "../../02-core/components/core/inputs/select";
import Autocomplete from "../../02-core/components/core/inputs/autocomplete";
import Switch from "../../02-core/components/core/inputs/switch";
import CheckboxFieldset from "../../02-core/components/core/inputs/checkbox-fieldset";
import RadioFieldset from "../../02-core/components/core/inputs/radio-fieldset";
// Components - Other
import Section from "../../02-core/components/section";

const propTypes = {};

const defaultProps = {};

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            isCheckbox: true,
            radio: null,
            date: new Date().toISOString().split("T")[0],
            isSwitchChecked: true,
            text: "",
            checkboxFieldsetList: [],
            radioFieldset: "2"
        };
        this.handleDialogChange = this.handleDialogChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCheckboxFieldsetChange = this.handleCheckboxFieldsetChange.bind(
            this
        );
        this.handleRadioFieldsetChange = this.handleRadioFieldsetChange.bind(
            this
        );
        this.renderTitle = this.renderTitle.bind(this);
    }
    handleDialogChange(isDialogOpen) {
        this.setState({ isDialogOpen });
    }
    handleCheckBoxChange(event) {
        this.setState({ isCheckbox: event.target.checked });
    }
    handleRadioChange(event) {
        this.setState({ radio: event.target.value });
    }
    handleDateChange(event) {
        this.setState({ date: event.target.value });
    }
    handleSwitchChange(event) {
        this.setState({ isSwitchChecked: event.target.checked });
    }
    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }
    handleCheckboxFieldsetChange(event) {
        const { checkboxFieldsetList } = this.state;
        const index = checkboxFieldsetList.findIndex(
            (e) => e === event.target.value
        );
        let newList = [...checkboxFieldsetList];
        if (event.target.checked && index < 0) {
            newList.push(event.target.value);
        } else if (!event.target.checked && index > -1) {
            newList.splice(index, 1);
        }
        this.setState({ checkboxFieldsetList: newList });
    }
    handleRadioFieldsetChange(event) {
        this.setState({ radioFieldset: event.target.value });
    }
    renderTitle(title) {
        return <h3>{title}</h3>;
    }
    render() {
        return (
            <Section title={"Inputs"}>
                {this.renderTitle("Button")}
                <Button
                    label="Some button"
                    onClick={() => alert("Button clicked!")}
                    icon="send"
                />
                <br />
                <Button
                    label="Some button 2"
                    onClick={() => alert("Button 2 clicked!")}
                />
                <br />
                <Button
                    label="Some button 3"
                    onClick={() => alert("Button 3 clicked!")}
                    icon="send"
                    disabled
                    progress
                />
                {this.renderTitle("Checkbox")}
                <Checkbox
                    name="someName"
                    label="Some checkbox label"
                    value="1"
                    checked={this.state.isCheckbox}
                    onChange={() => {}}
                />

                <Checkbox
                    name="someName"
                    label="Some checkbox label 2"
                    value="2"
                    checked={this.state.isCheckbox}
                    onChange={this.handleCheckBoxChange}
                    edit
                />
                {this.renderTitle("Switch")}
                <Switch
                    checked={this.state.isSwitchChecked}
                    onChange={this.handleSwitchChange}
                />
                {this.renderTitle("Text")}
                <Text
                    name="someTextLabel1"
                    label="Some text label"
                    value={this.state.text}
                />
                <Text
                    name="someTextLabel2"
                    label="Some text label"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    edit
                />
                <Text
                    name="someTextLabel3"
                    label="Some text label"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    error
                    helperText={"Some error"}
                    edit
                />
                {this.renderTitle("Select")}
                <Select />
                {this.renderTitle("Date picker")}
                <DatePicker
                    label="Some date picker label"
                    value={this.state.date}
                    onChange={this.handleDateChange}
                />
                {this.renderTitle("Radio")}
                <Radio
                    name={"radio"}
                    label={"Some radio"}
                    value={"radio1"}
                    checked={this.state.radio === "radio1"}
                    onChange={this.handleRadioChange}
                />
                <Radio
                    name={"radio"}
                    label={"Some radio 2"}
                    value={"radio1"}
                    checked={this.state.radio === "radio1"}
                    onChange={this.handleRadioChange}
                    edit
                />
                {this.renderTitle("Autocomplete")}
                <Autocomplete />
                {this.renderTitle("Checkbox fieldset")}
                <CheckboxFieldset
                    name="someCheckboxFieldset"
                    label="Some checkbox fieldset"
                    list={[
                        { id: 1, label: "Label 1" },
                        { id: 2, label: "Label 2" }
                    ]}
                    valueList={this.state.checkboxFieldsetList}
                    onChange={this.handleCheckboxFieldsetChange}
                    helperText="Some helper text"
                    edit
                />
                {this.renderTitle("Radio fieldset")}
                <RadioFieldset
                    name="someRadioFieldset"
                    label="Some radio fieldset"
                    list={[
                        { id: 1, label: "Label 1" },
                        { id: 2, label: "Label 2" }
                    ]}
                    value={this.state.radioFieldset}
                    onChange={this.handleRadioFieldsetChange}
                    helperText="Some helper text"
                    edit
                />
            </Section>
        );
    }
}

Inputs.propTypes = propTypes;
Inputs.defaultProps = defaultProps;
Inputs.displayName = "Inputs";

export default Inputs;
