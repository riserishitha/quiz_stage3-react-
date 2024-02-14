import Quizpage from "./components/quizfunctional";
import "./App.css";
import { Routes , Route } from "react-router-dom";
import PageFirst from "./components/home"
import Results from "./components/Result"
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/Quizpage" element = {<Quizpage/>} />
        <Route exact path="/" element = {<PageFirst/>}/>
        <Route exact path="/Results" element ={<Results/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
