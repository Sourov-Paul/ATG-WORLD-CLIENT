import React from 'react';
import './Login.css';
import useAuth from './../../Hooks/UseFirebase/useAuth';
import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import ResetPass from '../ResetPass/ResetPass';

const Login = () => {
    

    const {logInUser,signInWithFacebook,signInUsingGoogle}=useAuth()
    const [loginData,setLoginData]=useState({});
    const location=useLocation();
    const navigate=useNavigate()





    // handle onchange
    const handleOnBluer=e=>{
        const field= e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }

// handleLoginSubmit
    const handleLoginSubmit= e =>{
        logInUser(loginData.email,loginData.password,location,navigate)
    
        e.preventDefault()
    }
    
  
    // error message
// const errorHandleMessage=()=>{
//     Swal.fire({
//         icon: 'Error',
//         title: 'Oops...',
//         text: 'Something went wrong! Try Again'
//       })
//   }




    return (
        <div>

        <div className=" mainRegesterDiv">
        <div className=" row m-auto container">
        <div className="secondRegisterDiv col-sm-12  col-md-6 col-lg-6">
          <form className="registerForm  mt-5" onSubmit={handleLoginSubmit}>
   
        <span className='loginSite'>Sign In</span> <br />
        <input onBlur={handleOnBluer} placeholder="Email" type="email"  autoComplete="off" name="" id="" />
        <br />
         <input
         onBlur={handleOnBluer}
         
          placeholder="Your Password"
          type="password"
          name="password"
          required
          autoComplete="off"
         
        /> <br />
   
          <div className="divPopupSIgnin text-center">
        <button className='subMitButton '  type='submit'>Submit</button> <br />
          
          <button className='facebookSignInButton text-center m-2' onClick={signInWithFacebook}>
              <img className='facebookImage' src="https://i.ibb.co/xsSDJ28/f-logo-RGB-Blue-1024.png" alt="" />
              <span className='signInFacebook'>Sign In With Facebook</span>
          </button>
          <button className='googleSignInButton text-center m-2' onClick={signInUsingGoogle}>
              <img className='googleImage' src="https://i.ibb.co/D4GPq5G/google.png" alt="" />
              <span className='signInGoogle'>Sign In With Google</span>
          </button>


        <ResetPass></ResetPass>
         </div>
          </form>
          
        </div>
        <div className="secondRegisterDiv col-sm-12  col-md-6 col-lg-6">
       <p className='goToRegis'> Don’t have an account yet? 
        <span className='changeRegisterPage' data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" data-bs-dismiss="modal"><Link style={{textDecoration:'none'}} to='/register'>Create new for free!</Link></span></p>
        <img className="img-fluid" src="https://i.ibb.co/mq00vr4/create-Account.png" alt="" />
        </div>
        </div>
        </div>
     
        
        </div>
    );
};

export default Login;