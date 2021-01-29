import React from "react";
import PropTypes from "prop-types";
// Translate
import { withTranslation } from "../../02-core/utils/i18n";

// Components - Data display
import Table from "../../02-core/components/data-display/table";
import Badge from "../../02-core/components/data-display/badge";
import Tooltip from "../../02-core/components/data-display/tooltip";
import Icon from "../../02-core/components/data-display/icon";

const propTypes = {
    translate: PropTypes.func.isRequired
};

const defaultProps = {};

class DataDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { translate } = this.props;
        return (
            <div>
                <div>
                    <Table
                        columnList={[
                            { key: "name", title: "Name", align: "right" },
                            {
                                key: "calories",
                                title: "Calories",
                                align: "right"
                            },
                            {
                                key: "protein",
                                title: "Protein",
                                align: "right"
                            }
                        ]}
                        rowList={[
                            {
                                id: 1,
                                name: "Brad",
                                calories: 120,
                                protein: 150
                            },
                            {
                                id: 2,
                                name: "Martin",
                                calories: 200,
                                protein: 58
                            }
                        ]}
                    />
                </div>
                <div>
                    <Tooltip title="Some tooltip">
                        <span>{"Test tooltip"}</span>
                    </Tooltip>
                </div>
                <div>
                    <Badge value={4} icon={"mail"} />
                </div>
                <div>
                    <Icon>{"delete"}</Icon>
                </div>
                <h1>{translate("z-module2.sample")}</h1>
                <h1>{"H1"}</h1>
                <h2>{"H2"}</h2>
                <h3>{"H3"}</h3>
                <h4>{"H4"}</h4>
                <h5>{"H5"}</h5>
                <h6>{"H6"}</h6>
            </div>
        );
    }
}

DataDisplay.propTypes = propTypes;
DataDisplay.defaultProps = defaultProps;
DataDisplay.displayName = "DataDisplay";

export default withTranslation()(DataDisplay);
