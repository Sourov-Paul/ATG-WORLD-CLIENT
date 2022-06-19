import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Header from './../Shared/Header/Header';
import {   NavLink, Outlet } from 'react-router-dom';
import WritePost from '../NestedRoutes/WritePost/WritePost';
// import useAuth from './../Hooks/UseFirebase/useAuth';

const Home = () => {
  // const{user}=useAuth();


  const[users,setUsers]=useState([])


  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[setUsers])

    return (

        <div>
          
            <Header></Header>
          
            <Banner></Banner>
             {/* ===========mobile part============ */}
             <div className="postCountMainDiv container">
              <div className="counter">
                <span className="counts">Posts(368)</span>
              </div>
              <div className="filter">
              <div className="dropdown">
  <button className="bg-white border-0 dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Filter:All
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/">Edit</a>
    <a className="dropdown-item" href="/">Report</a>
    <a className="dropdown-item" href="/">Others</a>
  </div>
</div>
              </div>
            </div>


            {/* ==== */}
           <div className="mainPoster container">
           <div className="container ">
           <div className='container nestedRoutes'>
            <div className="links">
            <NavLink
          
          id="nestedRoute"
          className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
          to="/"
        >
          All Posts
        </NavLink>
        <NavLink
          
          className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
          to="article"
        >
          Article
        </NavLink>
        <NavLink
          
          className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
          to="event"
        >
          Event
        </NavLink>
        <NavLink
          
          className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
          to="education"
        >
          Education
        </NavLink>
        <NavLink
          
          className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
          to="job"
        >
          Job
        </NavLink>
            </div>
        <div className="writeSectin">
                  <WritePost></WritePost> 
               </div>
            </div>
            <Outlet></Outlet>
           </div>
               
           </div>



          

        </div>
    );
};

export default Home;