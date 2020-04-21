import React from 'react';
import { Avatar, Typography, Grid, IconButton, Card, CardActions } from "@material-ui/core";
import { GitHub, Mail, LinkedIn } from "@material-ui/icons";
import clyff from "../images/clyffstill.jpg";

const Banner = () => {
    return (
        <Card className="card">
            <Grid container justify="center" >
                <Avatar style={{ "width": "350px", "height": "350px", "margin": "25px" }} src={clyff} />
            </Grid>
            <Typography variant={"h3"} gutterBottom>
                Nick Morales
            </Typography>
            <Typography variant={"h5"} gutterBottom>
                Full Stack Web Developer
            </Typography>
            <CardActions>
                <Grid container justify="center" >
                    <Grid item sm={4} container spacing={4}>
                        <Grid item xs={4}>
                            <IconButton onClick={() => window.open("https://github.com/nickmora", "_blank")}>
                                <GitHub />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                            <IconButton onClick={() => window.open("https://www.linkedin.com/in/nick-morales-970437173/", "_blank")}>
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