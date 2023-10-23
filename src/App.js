import React, {useState,useEffect} from "react";
import logo from "./logo.png";
import "./App.css";
import axios from "axios";

const App =()=> {
  const [sightings,setSightings]=useState(null);

  const getSightings = async() =>{
    try{
      const response =await axios.get(`http://localhost:3000/sightings`);
      setSightings(response.data);
    } catch (error){
      console.log(error)
    }
  };
  
  useEffect(()=>{
    getSightings();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <ol>
          {sightings?sightings.map((sighting,index)=>{
            return <li>{`${sighting.YEAR} ${sighting.STATE}`}</li>
          }):"Loading"}
        </ol>
      </header>
    </div>
  );
  
}

export default App;
