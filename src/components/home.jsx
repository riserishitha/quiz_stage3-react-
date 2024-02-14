import { Component } from "react";
import {Link} from "react-router-dom"
class PageFirst extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="firstDiv">
                <p className="title">Quiz App</p>
                <Link to="/Quizpage">
                <button className="palybtn">Play</button>
                </Link>
            </div>
        )
    }
}
export default PageFirst;