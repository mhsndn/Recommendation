
import './App.css';
import {Routes,Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Recommendation from './components/Recommendation/Recommendation';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
        <Routes>
           <Route path="/" element={<Recommendation />}/>
           <Route path="/admin" element={<Login />}/>
           <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  );
}

export default App;
