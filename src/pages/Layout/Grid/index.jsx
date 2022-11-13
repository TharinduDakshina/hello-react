import React, {Component, Fragment} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles";
import Grid from '@mui/material/Grid';
import {TextField, Typography} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import CommandButton from "../../../components/common/button";

class GridLayout extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        let {classes} =this.props;
        return(
            <Fragment>
                <Typography variant="h4">
                    Customer Manager
                </Typography>

                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField
                            style={{marginTop: "30px", width: "100%"}}
                            id="standard-basic"
                            variant="standard"
                            label="Customer name"
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            getOptionLabel={
                                (option) => option.label
                            }
                            renderInput={(params) => <TextField {...params} label="Gender" />}
                            style={{width:"100%"}}

                        />

                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6} style={{width:"100%"}}>
                        <TextField
                            style={{marginTop: "30px", width: "100%"}}
                            id="standard-basic"
                            variant="standard"
                            label="Customer salary"
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6} style={{width:"100%"}}>
                        <TextField
                            style={{marginTop: "30px", width: "100%"}}
                            id="standard-basic"
                            variant="standard"
                            label="Customer Address"
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6}  container direction="row" justifyContent="flex-end" alignItems="baseline">
                        <CommandButton
                                label="Save"
                                variant="contained"
                                color='primary'
                        ></CommandButton>
                    </Grid>

                </Grid>
            </Fragment>

    );
    }
}
const top100Films = [
    { label: 'Male', year: 1 },
    { label: 'Female', year: 1
    }]
export default withStyles(styleSheet)(GridLayout);