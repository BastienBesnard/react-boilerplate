import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey, blue } from "@material-ui/core/colors";

// Apply change to SASS file in 02-core/styles/colors/index.scss
export default createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[700]
        },
        secondary: {
            main: blue[900]
        }
    }
});
