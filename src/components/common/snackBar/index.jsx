import {Component} from "react";
import PropTypes from "prop-types";
import {Alert, Snackbar} from "@mui/material";

class SnackBar extends Component{
    static propTypes ={
        open: PropTypes.bool,
        className: PropTypes.string,
        message: PropTypes.string,
        anchorOrigin: PropTypes.object,
        children: PropTypes.node,
        severity: PropTypes.string,
        autoHideDuration: PropTypes.number
    }

    static defaultProps = {
        open:false,
        className:"",
        message: "",
        name:"snack_Bar",
        severity:"success",
        autoHideDuration:3000,
        anchorOrigin:{
            vertical:"bottom",
            horizontal:"left"
        },
        variant:"filled"
    }

    handleButtonClose = (event) => {
        const {onClose} =this.props
        onClose && onClose({event})
    }

    renderChildren = (message,children) =>{
        if (message) return message;
        if (children) return children;
    }

    render() {
        const {
            open,
            className,
            anchorOrigin,
            autoHideDuration,
            children,
            message,
            severity,
            variant
        }=this.props;

        return(
            <Snackbar
                open={open}
                className={className}
                anchorOrigin={anchorOrigin}
                autoHideDuration={autoHideDuration}
                onClose={this.handleButtonClose}


            >

                <Alert variant={variant} severity={severity} onClose={this.handleButtonClose}>
                    {this.renderChildren(message,children)}
                </Alert>

            </Snackbar>
        );
    }
}

export default SnackBar;