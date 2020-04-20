import React from 'react';
import {Button} from "@material-ui/core";

const ResumeDownloadButton = () => {
    return ( 
        <Button
            component = "a"
            download 
            href = "#"
            //okay, so I need to uplaod my resume to the stratic assets and link it here when I'm done
        >
            Check out my Resume
        </Button>
     );
}
 
export default ResumeDownloadButton;