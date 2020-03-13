import React from "react"
import bootstrapIcon from "../images/logos/bootstrap.svg"
import css3Icon from "../images/logos/css3.svg"
import expressIcon from "../images/logos/express.svg"
import javascriptIcon from "../images/logos/javascript.svg"
import materialUIIcon from "../images/logos/materialUI.svg"
import reactIcon from "../images/logos/react.svg"
import reduxIcon from "../images/logos/redux.svg"
import mongodbIcon from "../images/logos/mongodb.svg"
import nodeIcon from "../images/logos/node.svg"
import mysqlIcon from "../images/logos/mysql.svg"
import html5Icon from "../images/logos/html5.svg"
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import mainStyle from "../_styles/mainStyle"

const TechStack = () => {
    const classes = mainStyle();
    return (
        <div className={classes.TechStack}>
            <Card className="card">
                <CardContent>
                    <Typography
                        variant="h2"
                        align="center"
                        gutterBottom
                    >
                        Tech Stack
                        </Typography>
                    <Grid container justify="center">

                        <Grid item xs={6}>
                            <Typography
                                variant="h5"
                                gutterBottom
                            >
                                Front End
                            </Typography>
                            <img src={bootstrapIcon} alt="bootstrap" />
                            <img src={css3Icon} alt="css" />
                            <img src={html5Icon} alt="html" />
                            <img src={javascriptIcon} alt="javascript" />
                            <img src={reactIcon} alt="react" />
                            <img src={reduxIcon} alt="redux" />
                            <img src={materialUIIcon} alt="materialUI" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="h5"
                                gutterBottom
                            >
                                Back End
                            </Typography>
                            <img src={expressIcon} alt="express" />
                            <img src={mongodbIcon} alt="mongo" />
                            <img src={mysqlIcon} alt="mysql" />
                            <img src={nodeIcon} alt="node" />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default TechStack