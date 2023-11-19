import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'
import { Button } from 'react-bootstrap';
import {ArrowLeft} from 'react-bootstrap-icons';

const NewListing = () => {
  const navigate = useNavigate();
  const [state,setState]= useState({
    date:"",
    location:"",
    notes:"",
  })
  const handleClick = () =>{
    navigate(-1);
  }

  const handleSubmit = async(event) =>{
    event.preventDefault();
    const newSighting = state
    try{
      const response =await axios.post(`http://localhost:3000/sightings`,newSighting);
      console.log("any response:",response)
      
    } catch (error){
      console.log(error)
    }
    setState({...state,
      date:"",
      location:"",
      notes:"",
    })
  };
  const handleChange=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setState({...state,
      [name]:value,
    })
    console.log(state)
  }
  useEffect(()=>{
  },[])
  return (
    <div className="App-header">
      <Button onClick={handleClick} >
        <ArrowLeft/>
      </Button>
      <form>
        <label>Enter date of sighting here in the format yyyy-mm-dd:</label>
        <input
          name="date"
          value={state.date}
          onChange={(e)=>handleChange(e)}
        />
        <br/>
        <label>Enter location of sighting here:</label>
        <input
          name="location"
          value={state.location}
          onChange={(e)=>handleChange(e)}
        />
        <br/>
        <label>Enter details of sighting here:</label>
        <input
          name="notes"
          value={state.notes}
          onChange={(e)=>handleChange(e)}
        />
        <br/>
      <button onClick={handleSubmit}>Contribute to the bigfoot database!</button>
      </form>

    </div>
  );
};

export default NewListing;
