import {createMuiTheme} from "@material-ui/core/styles";
import {lightBlue, blue }from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette:{
        primary: blue,
        secondary: {main:"#0000FF"},
        // background: {paper: "#00FF00", default: "#ff0000"}
    },
})

export default theme