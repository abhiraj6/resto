import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Loginp from './Components/Loginp';
import { Home } from '@mui/icons-material';
import Abhi from './Components/Abhi';


function App() {
  return (
    <div className="App">
   <Nav/>
   <Routes>
   <Route path='/' element={<Abhi/>}/>
    <Route path='/sign' element={<Loginp/>}/>
   </Routes>
    </div>
  );
}

export default App;
