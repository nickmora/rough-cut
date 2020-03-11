import React from 'react';
import { Typography, Paper, TextField, FormGroup, FormControlLabel, Checkbox, Button } from "@material-ui/core";

const Contact = () => {
    return (
        <div>
            <Paper className = "card">
                <Typography
                    variant="h2"
                >
                    Get in Touch
                    </Typography>
                <form action="submit">
                    <div>
                        <TextField
                            id="name"
                            placeholder="Name"
                            label="Name"
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            id="email"
                            placeholder="Email"
                            label="Email"
                            fullWidth
                            type="email"
                        />
                    </div>
                    <TextField
                        id="phone-number"
                        placeholder="Phone Number"
                        label="Phone Number"
                        fullWidth
                    />
                    <div>
                        <TextField
                            id="body"
                            placeholder="Message Body"
                            label="Message Body"
                            multiline
                            fullWidth
                        />
                    </div>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Subscribe to our Newsletter"
                        />
                    </FormGroup>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="I'm interested in volunteering"
                        />
                    </FormGroup>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Submit
                </Button>
                </form>
            </Paper>
        </div>
    );
}

export default Contact;