import React from 'react';
import { NavLink } from 'react-router-dom';
import './LinkAndRoute.css';
const LinkAndRoute = () => {
    return (
        <div>
             <div className="links">
            
        <NavLink
          
          className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
          to="/nesArticle"
        >
          Article
        </NavLink>
        
        <NavLink
          
          className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
          to="/nesEducation"
        >
          Education
        </NavLink>
        <NavLink
          
          className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
          to="/nesJob"
        >
          Job
        </NavLink>
            </div>

           
        </div>
    );
};

export default LinkAndRoute;