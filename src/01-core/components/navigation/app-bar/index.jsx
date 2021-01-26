import React from "react";
import PropTypes from "prop-types";

// Material-ui
import { makeStyles } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const propTypes = { onMenuClick: PropTypes.func.isRequired };

const defaultProps = {};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));
function AppBar({ onMenuClick }) {
    const classes = useStyles();
    return (
        <MuiAppBar position="static">
            <Toolbar>
                <IconButton
                    onClick={onMenuClick}
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </MuiAppBar>
    );
}

AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;
AppBar.displayName = "AppBar";

export default AppBar;
