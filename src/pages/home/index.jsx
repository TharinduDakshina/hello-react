import {Component} from "react";
import Greeting from "../../components/home/greeting";

class HomePage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
         <div>
             <Greeting name="Hello"/>
         </div>
        );
    }
}
export default HomePage;