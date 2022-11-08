import {Component,Fragment} from "react";
import Greeting from "../../components/home/greeting";
import Countable from "../../components/home/countable";
import Divider from '@mui/material/Divider';

class HomePage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
         <div>
             <Fragment>
                 <Greeting name="Hello"/>
                 <Divider light/>
                 <Countable/>
             </Fragment>

         </div>
        );
    }
}
export default HomePage;