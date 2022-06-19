import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hooks/UseFirebase/useAuth";
import Swal from 'sweetalert2'






const Register = () => {
  const { registerUser, error, user } = useAuth();

  const [registationInfo, setRegistationInfo] = useState({});

  const navigate = useNavigate();

  // onBlur Change
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...registationInfo };
    newLoginData[field] = value;
    setRegistationInfo(newLoginData,);
  };

  // submit form
  const handleRegSubmite = (e) => {
    if (registationInfo.password !== registationInfo.password2) {
      alert("Password not Match");
      return;
    }
    registerUser(
      registationInfo.email,
      registationInfo.password,
      registationInfo.name,
      navigate
     
    );
    succeessMessageSender()
    e.preventDefault();
  };



    // sucess message
    const succeessMessageSender=()=>{
      Swal.fire({
       
            icon: 'success',
            title: 'Registration Successfully'
          })
}
// error message
const errorHandleMessage=()=>{
  Swal.fire({
      icon: 'Error',
      title: 'Oops...',
      text: 'Something went wrong! Try Again'
    })
}




  return (
    <div>


      {user.email && (
        <h6 className="alreadyReg m-2">
          You already registered.Please logout and after try to register
        </h6>
      )}
      <div className=" row m-auto container">
        {/* <h2 className="text-center m-2">72-3 start</h2> */}
        <div className="secondRegisterDiv col-sm-12  col-md-6 col-lg-6">
          <form className="registerForm  mt-5" onSubmit={handleRegSubmite}>
          <span className='loginSite'>Create Account</span> <br />

            <input
              className=" m-1"
              onBlur={handleOnBlur}
              label="Name"
              type="name"
              name="name"
              required
              placeholder="First Name"
            />
           
            <br />
            <input
              className="m-1"
              onBlur={handleOnBlur}
              label="Email"
              type="email"
              name="email"
              required
              placeholder="Email "

            />{" "}
            <br />
        <input
              className="m-1 "
              data-toggle='password'
              onBlur={handleOnBlur}
              label="Password"
              type="password"
              name="password"
              required
              placeholder="Password"

            />
           
          
            
            <br />
            <input
              className="m-1"
              onBlur={handleOnBlur}
              label="Re-Password"
              type="password"
              name="password2"
              required
              placeholder='Confirm Password'
            />
            <br />
            <div className="divPopupSIgnin text-center">
              <button className="subMitButton" type="submit">
                Submit
              </button>

              <h2>{error}</h2>
            </div>
          </form>
        </div>
        <div className="secondRegisterDiv col-sm-12  col-md-6 col-lg-6">
       <p className='goToRegis'> Already have an account?  
        <span className='changeRegisterPage' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal"><Link style={{textDecoration:'none'}} to='/login'>Sign In</Link></span></p>
        <img className="img-fluid" src="https://i.ibb.co/mq00vr4/create-Account.png" alt="" />
        <p className="conditions">By signing up, you agree to our Terms & conditions, Privacy policy</p>
        </div>
       
       

        {
             error && errorHandleMessage()
          }
      </div>
      
    </div>
  );
};

export default Register;
