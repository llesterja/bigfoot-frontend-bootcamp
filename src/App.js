import React, {useState,useEffect} from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import NewListing from "./pages/NewListing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App =()=> {

  const  routes = [
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/:sightingIndex',
    element:<Listing/>
  },
  {
    path:'/newSighting',
    element:<NewListing/>
  }
]


  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;
