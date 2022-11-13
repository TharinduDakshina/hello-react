import {Component} from "react";
import {styleSheetNotFound} from "./notFoundStyle"
import {Typography} from "@mui/material";
import CommandButton from "../../../components/common/button";
import imageLocation from "../../../assets/images/404svg.webp";
import {withStyles} from "@mui/styles";
import {Link} from "react-router-dom";


class NotFound extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const {classes}=this.props;
        return(
            <div className={classes.container}>

                <div>
                    <Typography variant="h2" gutterBottom>
                         Tharindu Dakshina
                    </Typography>
                </div>

                <div className={classes.image_container}>
                    <img src={imageLocation} alt="404 error"/>
                </div>
                <Link to="/">
                    <CommandButton
                        variant="filled"
                        label="Back to home page"
                    />
                </Link>
            </div>
        );
    }
}

export default withStyles(styleSheetNotFound)(NotFound);