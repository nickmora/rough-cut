import React from 'react';
import { Typography, Paper } from "@material-ui/core";

const Bio = () => {
    return (
        <div>
            <Paper className = "card">
            <Typography
                variant="h2"
                gutterBottom
            >
                About Me
            </Typography>
            <Typography
                variant="body1"
                align = "justify"
                paragraph
            >
                My name is Nick.  I grew up in Seattle.  I went to school in Colorado where I studied art.  I now live in Oakland where I am supporting myself through freelance graphic design and web development.  I am also a TA for the Full Stack Web Development course at the UC Berkeley Extension campus.  I am currently looking for employment as a full stack web developer.  I like to help other people out.  I’m really passionate about math, language, transportation, design, and art.  These things have lead me to learn how to code because I recognize that computers are integral tools in helping us tie all of these concepts together and hopefully better if not save the world.  Please contact me below for employment inquiries, collaboration opportunities, or freelance contracts
            </Typography>
            </Paper>
        </div>
    );
}

export default Bio;