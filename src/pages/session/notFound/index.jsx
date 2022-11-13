import {Component, Fragment} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {Typography} from "@mui/material";
import imageLocation from "../../../assets/images/404svg.webp"
import CommandButton from "../../../components/common/button";
import {Link} from "react-router-dom";

class NotFound extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        let {classes} =this.props;
        return(
            <div className={classes.container}>
                <div className={classes.title}>
                    <Typography variant="h1" gutterBottom>
                        404
                    </Typography>
                </div>


                <Link to='/'>
                    <CommandButton
                        variant="contained"
                        label="Back to home page"
                    />
                </Link>

            </div>
        );
    }
}

export default withStyles(styleSheet)(NotFound);