import React, {useState,useEffect} from "react";
import axios from "axios";
const Home = () => {
  const [sightings,setSightings]=useState(null);

  const getSightings = async() =>{
    try{
      const response =await axios.get(`http://localhost:3000/sightings`);
      setSightings(response.data);
    } catch (error){
      console.log(error)
    }
  };
  return (
    <div>
      <ol>
        {sightings?sightings.map((sighting,index)=>{
          return <li><a href={`http://localhost:3000/sightings/${index}`}>{`${sighting.YEAR} ${sighting.STATE}`}</a></li>
        }):"Loading"}
      </ol>
    </div>
  );
};

export default Home;
