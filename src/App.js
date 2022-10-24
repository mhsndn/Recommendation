
import './App.css';
import {Routes,Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Recommendation from './components/Recommendation/Recommendation';
function App() {
  return (
    <div className="App">
        <Routes>
           <Route path="/" element={<Login />}/>
           <Route path="/recommendation" element={<Recommendation />}/>
      </Routes>
    </div>
  );
}

export default App;
