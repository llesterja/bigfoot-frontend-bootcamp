import React, {useState,useEffect} from "react";
import logo from "./logo.png";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

const App =()=> {
  const  routes = [
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/',
    element:<Listing/>
  }
]
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
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </div>
  );
  
}

export default App;
