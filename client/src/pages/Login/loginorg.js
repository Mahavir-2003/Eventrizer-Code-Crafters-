import React,{useState} from 'react' 
import {TextField} from '@mui/material';
import axios from 'axios';


const Login=()=>{ 

	const onSubmit = async () => {
		let data = {}
		await axios.post('http://localhost:5000/LoginOrganizer', login)
		.then(res => {
		  data = res.data
		});
		if(data.statusCode !== 200){
		  alert(data.err)
		  return 0;
		}
		else{
		  console.log("else executed");
		  window.location.href = "http://localhost:3000/organizer"
		}
	  }
	
	const obj = {
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
		  <h1 style={{color : "#505050"}}>Organizer Login</h1>
		<TextField label="Email" name="email" onChange={handleChange} variant="outlined" type="email" required />
		<TextField label="Password" name="password" onChange={handleChange} variant="outlined" type="password" required />
		<div className="submit-container"><button onClick={onSubmit} type="button" className="submit-btn">Login</button></div>
	  </form>
	  </div>
)}
export default Login;