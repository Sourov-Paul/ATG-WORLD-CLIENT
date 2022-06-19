import React from 'react';
import './Header.css';
import useAuth from './../../Hooks/UseFirebase/useAuth';
import Register from './../../RegisterLoginInfo/Register/Register';
import Login from './../../RegisterLoginInfo/Login/Login';
const Header = () => {
    const {user}=useAuth()
    return (
        <div>
          

            <nav className='mainHeader'>
                <div className=' d-flex justify-content-around'>
                    <div className='logo'> <img className='img-fluid' src="https://i.ibb.co/j4s4v1H/whole.png" alt="" /> </div>
                    <div className='search'>
                        <span className="searchTag">
                        <i className="fa-solid fa-magnifying-glass"></i>                     
                           <input placeholder='Search for your favorite groups in ATG' type="search" name="" id="" />
                        </span>
                    </div>
                    {
                        user?.email ? <div className='userLink'>{user.email&& <div><img className='userImage' src={user.photoURL && "https://i.ibb.co/dcrZchh/Rectangle-3-2.png"} alt="" /> 
                         <b className='userName'>{user.displayName}</b> </div> }</div>

                        :<div ><span className='accountStatus'>Create account. <button data-bs-toggle="modal" href="#exampleModalToggle1"  className="navLogin"><u>It's free</u></button></span> </div>
                    }
                </div>
                 {/* modal start */}
                 <div className="modal fade" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
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

{/* second modal */}
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


                {/* modal end */}
            </nav>
        </div>
    );
};

export default Header;