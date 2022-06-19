import React from 'react';
import './WritePost.css';
import Login from './../../RegisterLoginInfo/Login/Login';
import Register from '../../RegisterLoginInfo/Register/Register';
import useAuth from './../../Hooks/UseFirebase/useAuth';
import LinkAndRoute from '../../AllServicePostCompo/LinkAndRoute/LinkAndRoute';
import { Link } from 'react-router-dom';
const WritePost = () => {
  const {user,logOut}=useAuth();

    return (
        <div className='mainWriteDiv'>
              {
                user.email ? <Link to='linkAndRoute' className="writePost" >
                Write a Post <i className="fa-solid fa-caret-down"></i> </Link>:
                <button data-bs-toggle="modal" href="#exampleModalToggle1"  className="navLogin"><u></u></button>
                
                
              }











            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">Write Somthing</h5>
      <LinkAndRoute></LinkAndRoute>
      



        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
     
     
    </div>
  </div>
</div>


{/* ============================================================================= */}


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
<div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
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


{
  user?.email  ? <button className='logoutButtons' onClick={logOut}>
    <img className='logOutImage' src="https://i.ibb.co/BGWVZLp/Group-57.png" alt="" /></button> :
  
  <button  data-bs-toggle="modal" href="#exampleModalToggle2" className='logoutButtons' >
  <img className='logOutImage' src="https://i.ibb.co/b5kM9T4/Group-43-1.png" alt="" /></button>

  }


        </div>
    );
};
export default WritePost;