import React, { useState } from 'react';
// import useAuth from './../../Hooks/UseFirebase/useAuth';

const ResetPass = () => {
    // const[email,setEmail]=useState('')
    // const{forgotPassword}=useAuth()
    const [registationInfo, setRegistationInfo] = useState('');

    const handleOnBlur = (e) => {
       
        const value = e.target.value;
         
        setRegistationInfo(value);
      };
      const handleRegSubmite = (e) => {
          e.preventDefault();
    //  console.log(registationInfo())
 
    }

    return (
        <div>
             {/* forgot password */}
          <div className="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content gff">
      <div className="modal-header sdsd">
      <h5 className="modal-title4" id="exampleModalToggleLabel gf">
          <p className='worning'>Do you want to reset your password? Enter the email if you want.</p>
        </h5>

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
     <form 
     onSubmit={handleRegSubmite}
     >
              
         <input onBlur={handleOnBlur} placeholder='Email' type="email" name="email" id="" />
       <br />
         <input className='subMITY' type="submit" value="Send" />
     </form>
      </div>
      
    </div>
  </div>
</div>
         <button   className='forgotPassword'><a   data-bs-toggle="modal" href="#exampleModalToggle4" role="button">Forgot Password?</a></button>
          
        </div>
    );
};

export default ResetPass;