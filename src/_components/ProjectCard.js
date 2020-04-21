import React from 'react';
import { Card, CardContent, Typography, Grid, Paper, Button } from "@material-ui/core";

const ProjectCard = (props) => {
    return (
        <Card className="card">
            <CardContent>
                <Typography
                    variant="h4"
                >
                    {props.project.title}
                </Typography>
                <Typography
                    variant="subtitle2"
                    paragraph
                >
                    {props.project.description}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item md={8}>
                        <Paper className="card">
                            <img src={props.project.img} alt={props.project.altText} className="project-img" />
                        </Paper>
                    </Grid>
                    <Grid item md={4} container spacing={2} justify="space-between" direction="column">
                        <Grid item>
                            <Typography
                                variant="h6"
                                align="left"
                                gutterBottom
                            >
                                Techs Used:
                                    {props.project.techs.map(tech => {
                                        return (
                                            <Typography
                                                align = "left"
                                                key = {props.project.techs.indexOf(tech)}
                                            >
                                                    {tech}
                                            </Typography>
                                        )
                                    })}
                            </Typography>
                        </Grid>
                        {/* 
                        ---DATE FORMAT---
                        
                        <Typography
                            variant="body2"
                            align="right"
                            paragraph
                        >
                            {props.project.date}
                        </Typography> */}
                        <Grid item container spacing={2} direction="row" alignItems = "center">
                            <Grid item xs={6}
                            >
                                <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    onClick = {()=>window.open(props.project.git, "_blank")}
                                >
                                    GitHub Repo
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    color="secondary"
                                    onClick = {()=>window.open(props.project.deployed, "_blank")}
                                >
                                    Deployed Site
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default ProjectCard;