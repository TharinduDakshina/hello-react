import React, {Component} from "react";
import {SvgIcon, TextField, Typography} from "@mui/material";
import icon from "../../../assets/images/User1.png"
import {styleSheetLogin} from "../greeting/styles";
import {withStyles} from "@mui/styles";
import CommandButton from "../../common/button";


class Greeting extends Component{


    constructor(props) {
        super(props);
    }

    render() {
        const {classes}=this.props;
        return(
            <div className={classes.container}>
                <div>
                    <Typography variant="h3" gutterBottom>
                        Login page
                    </Typography>
                </div>

                <div className={classes.icon}>
                    <img src={icon} alt="user image"/>
                </div>

                <div>
                    <TextField style={{marginTop:"30px",width:"20vw"}}
                               id="standard-basic"
                               label="Username"
                               variant="standard" />
                        <br/>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        style={{marginTop:"30px",width:"20vw",fontSize:"4rem"}}
                    />
                </div>

                <CommandButton
                    label="Login"
                    variant="contained"
                    color="warning"
                    onClick={()=>{
                        console.log("incrementCount");
                        // this.incrementCount();
                    }}
                    style={{marginTop:"50px"}}
                />
            </div>
        );
    }
}
export default withStyles(styleSheetLogin)(Greeting);