import React from 'react';
import { Card, CardContent, Typography, Grid, Paper, Button } from "@material-ui/core";

const ProjectCard = (props) => {
    return (
        <Card className="card">
            <CardContent>
                <Typography
                    variant="h3"
                    gutterBottom
                >
                    {props.project.title}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item sm={4}>
                        <Paper className="card">
                            <img src={props.project.img} alt={props.project.altText} className="project-img" />
                        </Paper>
                    </Grid>
                    <Grid item sm={8}>
                        <Typography
                            variant="body1"
                            align="justify"
                            paragraph
                        >
                            {props.project.description}
                        </Typography>
                        {/* 
                        ---DATE FORMAT---
                        
                        <Typography
                            variant="body2"
                            align="right"
                            paragraph
                        >
                            {props.project.date}
                        </Typography> */}
                        <Grid container spacing={2}>
                            <Grid item sm={6}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                >
                                    Sign Up
                                                    </Button>
                            </Grid>
                            <Grid item sm={6}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    color="secondary"
                                >
                                    Volunteer
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