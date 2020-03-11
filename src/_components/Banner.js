import React from 'react';
import { Avatar, Typography, Grid, IconButton, Card, CardActions } from "@material-ui/core";
import { GitHub, Mail, LinkedIn } from "@material-ui/icons";
const Banner = () => {
    return (
        <Card>
            <Grid container justify = "center" >
                <Avatar style = {{"width": "250px", "height": "250px", "borderWidth" : "10px", "borderColor" : "red", "borderStyle" : "solid", "margin" : "25px" }} src="#" />
            </Grid>
            <Typography variant={"h3"} gutterBottom>
                Nick Morales
            </Typography>
            <Typography variant={"h5"} gutterBottom>
                Full Stack Web Developer
            </Typography>
            <CardActions>
                <Grid container justify = "center" >
                <Grid item xs = {4} container spacing={4} alignContent="center">
                    <Grid item xs={4}>
                        <IconButton onClick = {()=>window.open("https://github.com/nickmora", "_blank")}>
                            <GitHub />
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton onClick = {()=>window.open("https://www.linkedin.com/in/nick-morales-970437173/", "_blank")}>
                            <LinkedIn />
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton>
                            <Mail />
                        </IconButton>
                    </Grid>
                </Grid>
                </Grid>
            </CardActions>
        </Card>
       
    );
}

export default Banner;