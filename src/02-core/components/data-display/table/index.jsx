import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const propTypes = {
    columnList: PropTypes.array.isRequired,
    rowList: PropTypes.array.isRequired
};

const defaultProps = {};

function Table({ columnList, rowList }) {
    return (
        <TableContainer>
            <MuiTable aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columnList.map((column) => (
                            <TableCell key={column.key} align={column.align}>
                                {column.title}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowList.map((row) => (
                        <TableRow key={row.id}>
                            {columnList.map((column) => (
                                <TableCell
                                    key={column.key}
                                    align={column.align}
                                >
                                    {row[column.key]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.displayName = "Table";

export default Table;
