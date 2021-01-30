import React from "react";

// Components - Inputs
import Button from "../../02-core/components/inputs/button";
import Text from "../../02-core/components/inputs/text";
import Checkbox from "../../02-core/components/inputs/checkbox";
import Radio from "../../02-core/components/inputs/radio";
import Datepicker from "../../02-core/components/inputs/datepicker";
import Select from "../../02-core/components/inputs/select";
import Autocomplete from "../../02-core/components/inputs/autocomplete";
import Switch from "../../02-core/components/inputs/switch";

const propTypes = {};

const defaultProps = {};

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            isCheckbox: true,
            date: new Date("2014-08-18T21:11:54"),
            isSwitchChecked: true,
            text: ""
        };
        this.handleDialogChange = this.handleDialogChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleDialogChange(isDialogOpen) {
        this.setState({ isDialogOpen });
    }
    handleCheckBoxChange(event) {
        this.setState({ isCheckbox: event.target.checked });
    }
    handleDateChange(date) {
        this.setState({ date });
    }
    handleSwitchChange(event) {
        this.setState({ isSwitchChecked: event.target.checked });
    }
    handleTextChange(value) {
        this.setState({ text: value });
    }
    render() {
        return (
            <React.Fragment>
                <Button
                    label="Button"
                    onClick={() => console.log("Button clicked!")}
                    icon="send"
                />
                <Checkbox
                    checked={this.state.isCheckbox}
                    handleChange={this.handleCheckBoxChange}
                />
                <Switch
                    checked={this.state.isSwitchChecked}
                    handleChange={this.handleSwitchChange}
                />
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
                    edit
                />
                <Select />
                <Datepicker
                    label={"some date picker label"}
                    value={this.state.date}
                    handleChange={this.handleDateChange}
                />
                <Radio />
                <Autocomplete />
            </React.Fragment>
        );
    }
}

Inputs.propTypes = propTypes;
Inputs.defaultProps = defaultProps;
Inputs.displayName = "Inputs";

export default Inputs;
