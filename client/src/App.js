import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Organizer from "./pages/organizer/Organizer";
import Vendor from "./pages/vendor/Vendor";
import Login from "./pages/Login/loginorg";
import Loginv from "./pages/Login/loginven";
import RegistrationForm from "./pages/Register/registerorg";
import RegistrationFormv from "./pages/Register/regven";
import EventForm from "./pages/Event-form/form";
// import { Provider} from "react-redux";
// import store from "./store/store";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/organizerLogin" element={<Login />}></Route>
            <Route path="/vendorLogin" element={<Loginv />}></Route>
            <Route path="/organizerSignUp" element={<RegistrationForm/>}></Route>
            <Route path="/vendorSignUp" element={<RegistrationFormv/>}></Route>
            <Route path="/organizer" element={<Organizer/>}></Route>
            <Route path="/eventform" element={<EventForm/>}></Route>
            <Route path="/vendor" element={<Vendor/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
