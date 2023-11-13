import React, { useEffect,useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'
import { Button } from 'react-bootstrap';
import {ArrowLeft} from 'react-bootstrap-icons';

const Listing = () => {
  const [sighting,setSighting]=useState(null);
  const {sightingIndex} = useParams();
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(-1);
  }

  const getSighting = async() =>{
    try{
      const response =await axios.get(`http://localhost:3000/sightings/${sightingIndex}`);
      setSighting(Object.entries(response.data));
      console.log("any response:",response)
    } catch (error){
      console.log(error)
    }
  };
  
  useEffect(()=>{
    getSighting();
  },[])
  return (
    <div className="App-header">
      <Button onClick={handleClick} >
        <ArrowLeft/>
      </Button>

      {sighting?sighting.map(([key,value])=>{
        return <div><br/>{`${key}: ${value}`} </div>;
      })
        :"Loading"}
    </div>
  );
};

export default Listing;
