import './App.css';
import Login from './Components/Login&Signup/Login';
import Signup from './Components/Login&Signup/Signup';
import Userdash from './Components/Dashboard/UserDashboard/Userdash';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/userdash' element={<Userdash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
