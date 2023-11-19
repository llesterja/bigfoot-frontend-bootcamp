import React, {useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../App.css";
import { Button } from 'react-bootstrap';

const Home = () => {
  const [sightings,setSightings]=useState(null);
  const navigate = useNavigate();
  const getSightings = async() =>{
    try{
      const response =await axios.get(`http://localhost:3000/sightings`);
      setSightings(response.data);
    } catch (error){
      console.log(error)
    }
  };
  const handleClick = () =>{
    navigate("/newSighting");
  }
  useEffect(()=>{
    getSightings();
  },[])
  return (
    <div className="App-header">
      <ol>
        {sightings?sightings.map((sighting,index)=>{
          return <li><a href={`http://localhost:3001/${sighting.id}`}>{`${sighting.date} ${sighting.location}`}</a></li>
        }):"Loading"}
      </ol>
      <Button onClick={handleClick}>
        Report New Sighting Here!
      </Button>
    </div>
  );
};

export default Home;
