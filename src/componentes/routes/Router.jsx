import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home.jsx';
import Destination from "../components/destination/Destination";
import Crew from "../components/crew/Crew";
import Technology from "../components/technology/Technology";


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router