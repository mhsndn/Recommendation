
import './App.css';
import {Routes,Route,Navigate
} from "react-router-dom";
import Login from './components/Login/Login';
import Recommendation from './components/Recommendation/Recommendation';
import Dashboard from './components/Dashboard/Dashboard';
import { useSelector } from 'react-redux';


function App() {
  const auth=useSelector(state=>state.form.auth)

  return (
    <div className="App">

        <Routes>
           <Route path="/" element={<Recommendation />}/>
           <Route path="/admin" element={<Login />}/>
           <Route path="/dashboard" element={auth?<Dashboard />:<Navigate to='/admin' />}/>
      </Routes>
    </div>
  );
}

export default App;
