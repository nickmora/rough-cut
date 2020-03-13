import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
        "& .card": {
            padding: theme.spacing(3),
            margin: theme.spacing(1),
        },
        "& .project-img": {
            maxWidth: "100%",
        },
    },
    Footer: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.getContrastText(theme.palette.secondary.dark)
    }
}))

export default useStyles