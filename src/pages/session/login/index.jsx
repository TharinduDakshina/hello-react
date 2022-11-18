import {Component, Fragment} from "react";
import Greeting from "../../../components/login/greeting";


class LoginPage extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Fragment>
                    <Greeting/>
                </Fragment>
            </div>
        );
    }
}

export default LoginPage;