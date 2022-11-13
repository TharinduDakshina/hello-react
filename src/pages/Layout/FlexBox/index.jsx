import {Component, Fragment} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {Typography} from "@mui/material";


class FlexBoxLayout extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        let {classes} =this.props;
        return(
            <div className={classes.container}>
                <div className={classes.title__container}>
                    <Typography variant="h2">
                            Customers
                    </Typography>
                </div>
                <div className={classes.txtFields__container}>
                    <div className={classes.leftSide_form}></div>
                    <div className={classes.rightSide_form}></div>
                </div>
                <div className={classes.button__container}></div>

            </div>
        );
    }
}

export default withStyles(styleSheet)(FlexBoxLayout);