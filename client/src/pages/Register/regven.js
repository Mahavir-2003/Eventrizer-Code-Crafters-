import {TextField} from '@mui/material';
import './register.css'
import { useState } from 'react';
import axios from 'axios';


function RegistrationFormv() {

  const onSubmit = async () => {
    let data = {}
    await axios.post('http://localhost:5000/RegisterVender', login)
    .then(res => {
      data = res.data
    });
    if(data.statusCode !== 200){
      alert(data.err)
      return 0;
    }
    else{
      console.log("else executed");
      window.location.href = "http://localhost:3000/vendor"
    }
  }

const obj = {
        name: "",
        email: "",
        password: ""
}

const [login , setLogin] = useState(obj);

const handleChange = (e) => {
    const {name , value} = e.target;
    setLogin({...login , [name] : value});
}

    return(
      <div className="form-container">
      <form className="form">
        <h1 style={{color : "#505050"}}>Vendor Sign Up</h1>
      <TextField label="Name" name='name' onChange={handleChange} variant="outlined" required />
      <TextField label="Email" name='email' onChange={handleChange} variant="outlined" type="email" required />
      <TextField label="Password" name='password' onChange={handleChange} variant="outlined" type="password" required />
      <div className="submit-container"><button onClick={onSubmit} type="button" className="submit-btn">SignUp</button></div>
    </form>
    </div>
    )       
}
export default RegistrationFormv;