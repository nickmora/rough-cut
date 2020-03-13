import React from 'react';
import { Typography } from "@material-ui/core";
import mainStyle from "../_styles/mainStyle";
// import {useTheme} from "@material-ui/core/styles";


const Footer = () => {
    // const theme = useTheme();
    const classes = mainStyle();
    return (
        console.log(classes),
        <footer className = {classes.Footer}>
            <Typography
                variant = "body2"
            >
                Copyright &copy; 2020 Nick Morales <br /> All Rights Reserved
            </Typography>
        </footer>
    );
}

export default Footer;