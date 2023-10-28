import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Listing = () => {
  const [sighting,setSighting]=useState(null);
  const {sightingIndex} = useParams();
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
    <div>
      {sighting?sighting.map(([key,value])=>{
        return <div> {`${key}: ${value}`} </div>;
      })
        :"Loading"}
    </div>
  );
};

export default Listing;
