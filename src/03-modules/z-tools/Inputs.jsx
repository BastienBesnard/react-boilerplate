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
            date: new Date().toISOString().split("T")[0],
            isSwitchChecked: true,
            text: ""
        };
        this.handleDialogChange = this.handleDialogChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.renderTitle = this.renderTitle.bind(this);
    }
    handleDialogChange(isDialogOpen) {
        this.setState({ isDialogOpen });
    }
    handleCheckBoxChange(event) {
        this.setState({ isCheckbox: event.target.checked });
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
                    label="Some checkbox label"
                    checked={this.state.isCheckbox}
                />

                <Checkbox
                    label="Some checkbox label 2"
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
                <Text label="Some text label" value={this.state.text} />
                <Text
                    label="Some text label"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    edit
                />
                <Text
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
                <Radio />
                {this.renderTitle("Autocomplete")}
                <Autocomplete />
            </Section>
        );
    }
}

Inputs.propTypes = propTypes;
Inputs.defaultProps = defaultProps;
Inputs.displayName = "Inputs";

export default Inputs;
