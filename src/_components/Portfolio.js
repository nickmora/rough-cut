import React from 'react';
import { Typography, Grid, Paper } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import defaultProjects from "../projects.js";

const Portfolio = () => {
    const [projects, setProjects] = React.useState(defaultProjects);
    return (
        <Paper className = "card">
            <Typography
                variant="h2"
            >
                Portfolio
            </Typography>
            <Grid
                container
                spacing={4}
            >
                {projects.length ?
                    projects.map(project => {
                        return (
                            <Grid
                                item
                                sm={12}
                                key = {project.id}
                            >
                                <ProjectCard project= {project}/>
                            </Grid>
                                )
                            })
                                :
                <Typography>
                                    Something went wrong
                </Typography>
                                }
            </Grid>
        </Paper>
            );
        }
         
export default Portfolio;