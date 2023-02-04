import React from 'react'
import {TextField} from '@mui/material';
import axios from 'axios'
import "./AddEvent.css"


const AddEvent = () => {

  const onAdd = async () => {
    let data = {}
    await axios.post('http://localhost:5000/AddEvent', addEvent)
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
      "creatorId" : "63ddec6fe648e792cad2408b",
      "name" : "",
      "dateOfStart" : "",
      "dateOfEnd" : "",
      "time" : "",
      "location" : "",
      "description" : "",
      "budget" : 0,
      "eventStatus" : "active"
  }

  const [addEvent , setAddEvent] = React.useState(obj);

  const handleChange = (e) => {
      const {name , value} = e.target;
      setAddEvent({...addEvent , [name] : value});
  }

  return (
    <div className="form-container">
		<form className="form">
		  <h1 style={{color : "#505050"}}>Organizing {addEvent.name}</h1>
          <TextField label="Event Name" name='name' onChange={handleChange} variant="outlined" required />
          <div style={{display : "flex" , width : "100%" , justifyContent : "space-between" , gap : "10px"}}>
          <TextField label="Starting Date" name='dateOfStart' onChange={handleChange} variant="outlined" required />
          <TextField label="Ending Date" name='dateOfEnd' onChange={handleChange} variant="outlined" required />
          <TextField label="Time" name='time' onChange={handleChange} variant="outlined" required />
          </div>
          <div style={{display : "flex" , width : "100%" , justifyContent : "space-between" }}>
          <TextField label="Location" name='location' onChange={handleChange} variant="outlined" required />
          <TextField label="Budget" name='budget' onChange={handleChange} variant="outlined" required />
          </div>
		<TextField label="description" name='description' onChange={handleChange} variant="outlined" multiline rows={4} required />
		<div className="submit-container"><button onClick={onAdd} type="button" className="submit-btn">Add</button></div>
	  </form>
	  </div>
  )
}

export default AddEvent
