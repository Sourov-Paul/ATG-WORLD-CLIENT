import React from 'react';
import './Banner.css';
import { useState,useEffect } from 'react';
import Login from './../RegisterLoginInfo/Login/Login';
import Register from './../RegisterLoginInfo/Register/Register';


const Banner = () => {

    const [user,setUsers]=useState('')

    useEffect(() => {
        fetch('https://morning-brook-05622.herokuapp.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[setUsers])



    return (
        <div className='mainBanner'>
            <div className="maincontent  ">
                <div className=' container icons'>
                    <div className="backIcons">
                        <span className='backIconI'><i className="fa-solid fa-arrow-left"></i></span>
                    </div>
                    <div className="joinGroupIcon">
                        <button data-bs-toggle="modal" href="#exampleModalToggle2"  className='joinNow'>Join Group</button>
                    </div>
                </div>




        {/* modal start  */}
        
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">
          <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <Login></Login>
      </div>
     
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
      <h5 className="modal-title" id="exampleModalToggleLabel">
          <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        </h5>

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <Register></Register>
      </div>
      
    </div>
  </div>
</div>

        {/* modal end */}
                
    
                <div className="row container m-auto pt-5">
                    <div className="first col-sm-8 col-md-8 col-lg-8">
                        <span className=' engineering'>Computer Engineering</span>
                        <p className='followar'>18976 Computer Engineers follow this</p>
                        </div>
                    <div className="  col-sm-4 col-md-4 col-lg-4"> </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;