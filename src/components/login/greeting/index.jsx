import React, {Component} from "react";
import {Snackbar, SvgIcon, TextField, Typography} from "@mui/material";
import icon from "../../../assets/images/User1.png"
import {styleSheetLogin} from "../greeting/styles";
import {withStyles} from "@mui/styles";
import CommandButton from "../../common/button";
import SnackBar from "../../common/snackBar"


class Greeting extends Component{


    constructor(props) {
        super(props);
        this.state = {
            userName: "admin",
            password: "admin",
            formData: {
                tempName: "",
                tempPassword: ""
            },

            // for snackBar
            open:false,
            message:"",
            severity:""

        }
    }


    render() {
        const {classes}=this.props;
        return(
            <div className={classes.container}>
                <div className={classes.login__cover}>
                    <div>
                        <Typography variant="h3" gutterBottom>
                            Login page
                        </Typography>
                    </div>

                    <div className={classes.icon}>
                        <img src={icon} alt="user image"/>
                    </div>

                    <div>
                        <TextField
                            style={{marginTop: "30px", width: "20vw"}}
                            id="standard-basic"
                            label="Username"
                            variant="standard"
                            onChange={(e) => {
                                console.log(e.target.value);
                                let formData=this.state.formData
                                formData.tempName=e.target.value

                                this.setState({formData});

                            }}
                        />
                        <br/>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            style={{marginTop:"30px",width:"20vw",fontSize:"4rem"}}
                            onChange={(e) => {
                                console.log(e.target.value);
                                let formData=this.state.formData
                                formData.tempPassword=e.target.value

                                this.setState({formData});
                            }}
                        />
                    </div>

                    <div>
                        <CommandButton
                            label="Login"
                            variant="contained"
                            color="primary"
                            onClick={()=>{
                                this.checkValidUnameAndPassword();
                            }}
                            style={{marginTop:"50px"}}
                        />
                    </div>

                        <SnackBar
                            open={this.state.open}
                            onClose={()=>{
                                this.setState({open:false})
                            }}
                            message={this.state.message}
                            autoHideDuration={3000}
                            severity={this.state.severity}
                            variant="filled"
                        />
                </div>


            </div>
        );
    }

    checkValidUnameAndPassword() {
        console.log("Login");
        console.log(this.state.formData);
        console.log("Username : "+this.state.formData.tempName);
        console.log("Password : "+this.state.formData.tempPassword);

        if (this.state.userName==this.state.formData.tempName && this.state.password==this.state.formData.tempPassword){
            console.log("successfully check values");
            this.setState({
                open:true,
                message:"User credential successful.",
                severity:"success"
            });
        }else {
            this.setState({
                open:true,
                message:"User credential not successful..!",
                severity:"error"
            });
        }
    }
}
export default withStyles(styleSheetLogin)(Greeting);