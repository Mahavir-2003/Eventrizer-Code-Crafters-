
import './App.css';
import RegistrationFrom from '../Register/registerorg.js';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import EventForm from '../Event_form/form';
import Login from '../Login/loginorg';
import Card from '../Card/Card';

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />}></Route>
        <Route path="/registerorg" element={<RegistrationFrom/>}></Route>
        <Route path="/loginorg" element={<Login/>}></Route>
        <Route path="/form" element={<EventForm/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
