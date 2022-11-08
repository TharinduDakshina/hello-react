import React,{Component} from "react";
import {Button, Typography} from "@mui/material";
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
                <Button
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
                    }}>Reset</Button>
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