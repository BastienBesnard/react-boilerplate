import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey, blue } from "@material-ui/core/colors";

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
