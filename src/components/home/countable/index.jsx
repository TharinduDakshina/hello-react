import React,{Component} from "react";
import {Typography} from "@mui/material";
import CommandButton from "../../common/button";
class Countable extends Component{

    constructor(props) {
        super(props);
        this.state={
            count: 0
        };
    }

    incrementCount(){
        this.setState({
            count:this.state.count + 1
        });
    }

    decrementCount(){
        this.setState({
            count:this.state.count-1
        });
    }

    render() {

        return(
            <div>
                <Typography variant="h4" gutterBottom>
                    Count : {this.state.count}
                </Typography>


                {/*<Button
                    variant="contained"
                    onClick={()=>{
                        console.log("Clicked");
                        this.incrementCount();
                }}>Increase</Button>
                <Button
                    variant="contained"
                    onClick={()=>{
                        this.decrementCount();
                    }}
                    style={{margin:"15px"}}
                >Decrease</Button>

                <Button
                    variant="contained"
                    onClick={()=>{
                        this.resetCount();
                    }}>Reset</Button>*/}

                <CommandButton
                        label="Increase"
                        variant="contained"
                        onClick={()=>{
                            console.log("incrementCount");
                            this.incrementCount();
                        }}
                />

                <CommandButton
                    label="Decrease"
                    variant="outlined"
                    onClick={()=>{
                        console.log("decrementCount");
                        this.decrementCount();
                    }}
                    style={{margin:"15px"}}
                />

                <CommandButton
                    label="Reset"
                    variant="outlined"
                    color="error"
                    onClick={()=>{
                        console.log("resetCount");
                        this.resetCount();
                    }}
                />

            </div>


        );
    }

    resetCount() {
        this.setState({
            count:0
        });
    }
}

export default Countable;