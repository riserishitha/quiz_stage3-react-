import {Link,useLocation} from "react-router-dom";
function Results(){
    let gps = useLocation()
    let propsValue = gps.state
    return (
        <>
        <h2>Result</h2>
        <div className="lastMain"> 
            <h3>You need more practice!</h3>
            <h4>Your score is {propsValue.marks}</h4>
                <p>Total number of questions <span>15</span></p>
                <p>Number of attempt question<span>{propsValue.answered}</span></p>
                <p>Number of correct answers <span>{propsValue.right}</span></p>
                <p>Number of wrong answers  <span>{propsValue.failed}</span></p>
        </div>
        <div className="movebtn">
            <Link to="/Quizpage>
            <button>Play Again</button>
            </Link>
            <Link to="/">
            <button>Back to home</button>
            </Link>
        </div>
        </>
    )
}
export default Results;
