import React from 'react';
// import { Link } from 'react-router-dom';
import './Allpost.css';
const Allpost = () => {
    return (
      <div className="row">
        {/* all post section */}
        <div className="col-sm-12 col-md-8 col-lg-8 asdas">
        <div className="mianAllPost">
        <div className="card mb-3 mainCards">
          <img
            src="https://i.ibb.co/0Vz5PRS/Rectangle-5.png"
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body">
            <div className="card-title editOpction">
              <div className="logo1">
                {" "}
                <img src="https://i.ibb.co/GCjYKyQ/Article.png" alt="" />
              </div>
              <div className="editButton">
                {/* <i className="fa-solid fa-ellipsis"></i> */}
                <div className="dropdown">
  <button className="bg-white border-0 dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    ...
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/">Edit</a>
    <a className="dropdown-item" href="/">Report</a>
    <a className="dropdown-item" href="/">Others</a>
  </div>
</div>
              </div>
            </div>
            <p className="card-text1">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </p>
            <p className="card-text2">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <div className="cardManImg">
              <div className="photoName">
                <img src="https://i.ibb.co/jrqx0HK/Rectangle-3.png" alt="" />
                <span className="manName">Sarthak Kamra</span>
              </div>
              <div className="viewShare">
                <span>
                  {" "}
                  <i className="fa-solid fa-eye"></i> 1.4k views
                </span>
                <button className="border-0 buttonSize">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="card mb-3 mainCards">
          <img
            src="https://i.ibb.co/ZmHbDDY/Rectangle-5-1.png"
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body">
            
            <div className="card-title editOpction">
              <div className="logo1">
                {" "}
                <img src="https://i.ibb.co/gSfWrGn/Education.png" alt="" />
              </div>
              <div className="editButton">
                {/* <span > 
                <i className="fa-solid fa-ellipsis"></i>
                </span>
                <Link to='/updatePost'> 
                <i className="fa-solid fa-ellipsis"></i>
                </Link> */}
                 <div className="dropdown">
  <button className="bg-white border-0 dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    ...
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/">Edit</a>
    <a className="dropdown-item" href="/">Report</a>
    <a className="dropdown-item" href="/">Others</a>
  </div>
</div>
                
              </div>
            </div>
            <p className="card-text1">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </p>
            <p className="card-text2">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <div className="cardManImg">
              <div className="photoName">
                <img src="https://i.ibb.co/DgK6PB9/Rectangle-3-1.png" alt="" />
                <span className="manName">Sarthak Kamra</span>
              </div>
              <div className="viewShare">
                <span>
                  {" "}
                  <i className="fa-solid fa-eye"></i> 1.4k views
                </span>
                <button className="border-0 buttonSize">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Meetup */}
        <div className="card mb-3 mainCards">
          <img
            src="https://i.ibb.co/4Sg5XjS/Rectangle-5.png"
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body">
            
            <div className="card-title editOpction">
              <div className="logo1">
                {" "}
                <img src="https://i.ibb.co/r2zLdVb/Meetup.png" alt="" />
              </div>
              <div className="editButton">
                {/* <Link to='/updatePost'> 
                <i className="fa-solid fa-ellipsis"></i>
                </Link> */}
                 <div className="dropdown">
  <button className="bg-white border-0 dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    ...
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/">Edit</a>
    <a className="dropdown-item" href="/">Report</a>
    <a className="dropdown-item" href="/">Others</a>
  </div>
</div>
              </div>
            </div>
            <p className="card-text1">
            Finance & Investment Elite Social Mixer @Lujiazui
            </p>
            <div className="card-text23">
              <div className="dateDay">
                <img className='m-2' src="https://i.ibb.co/93QzjHt/Vector-2.png" alt="" />
                <span className="dates">Fri,12 Oct,2018</span>
              </div>
              <div className="dateDay">
                <img src="https://i.ibb.co/dDyBL1x/outline-location-on-24px-2.png" alt="" />
                <span className="dates">Ahmedabd,India</span>
              </div>
            </div>
              <button className='visitWebsite'>Visit Website</button>
            
            <div className="cardManImg">
              <div className="photoName">
                <img src="https://i.ibb.co/p0hQX96/Rectangle-3-1.png" alt="" />
                <span className="manName">Sarthak Kamra</span>
              </div>
              <div className="viewShare">
                <span>
                  {" "}
                  <i className="fa-solid fa-eye"></i> 1.4k views
                </span>
                <button className="border-0 buttonSize">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Jobs */}
        <div className="card mb-3 mainCards">
         
          <div className="card-body">
            
            <div className="card-title editOpction">
              <div className="logo1">
                {" "}
                <img src="https://i.ibb.co/rQmmB0f/Job.png" alt="" />
              </div>
              <div className="editButton">
                {/* <Link to='/updatePost'> 
                <i className="fa-solid fa-ellipsis"></i>
                </Link> */}
                 <div className="dropdown">
  <button className="bg-white border-0 dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    ...
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/">Edit</a>
    <a className="dropdown-item" href="/">Report</a>
    <a className="dropdown-item" href="/">Others</a>
  </div>
</div>
              </div>
            </div>
            <p className="card-text1">
            Software Developer
            </p>
            <div className="card-text23">
              <div className="dateDay">
                <img className='m-2' src="https://i.ibb.co/StXXHG5/Vector-3.png" alt="" />
                <span className="dates">Innovaccer Analytics Private Ltd.</span>
              </div>
              <div className="dateDay">
                <img src="https://i.ibb.co/dDyBL1x/outline-location-on-24px-2.png" alt="" />
                <span className="dates">Nodia,India</span>
              </div>
            </div>
              <button className='visitWebsite2'>Apply on Timesjobs</button>
            
            <div className="cardManImg">
              <div className="photoName">
                <img src="https://i.ibb.co/dcrZchh/Rectangle-3-2.png" alt="" />
                <span className="manName">Sarthak Kamra</span>
              </div>
              <div className="viewShare">
                <span>
                  {" "}
                  <i className="fa-solid fa-eye"></i> 1.4k views
                </span>
                <button className="border-0 buttonSize">
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>
        </div>










      </div>
        </div>



        {/* Follower section */}
        <div className="col-sm-12 col-md-4 col-lg-4 ssss">
          <div className="countrySearchAndFlower">
            <div className="mt-5 countrySearch">
              <div className="mainSearch">
              <img className='locationImage' src="https://i.ibb.co/dDyBL1x/outline-location-on-24px-2.png" alt="" />
              <input className='locationInput' type="text" placeholder='Enter Your Location'/>
              </div>
            </div>
            
          </div>
          <div className="countrySearchAndFlower mt-5">
            <div className="mt-5 countrySearch">
              <div className="mainSearch">
              <img className='locationImage' src="https://i.ibb.co/FB16sSB/Vector.png" alt="" />
              <p className='locationInput wText'>Your location will help us serve better and extend a personalised experience.</p>
              </div>
            </div>

          </div>
          <div className="countrySearchAndFlower mt-5">
            <div className="mt-5 countrySearch">
              <div className="mainSearch">
              <img className='locationImage image' src="https://i.ibb.co/Fb1rydD/Vector-1.png" alt="" />
              <p className='locationInput recommended mt-3'>REcommended Groups</p>
              </div>
            </div>

          </div>



          {/* folowers */}
         <div className="mainFol">
         <div className="mainContentFollower mt-4">
            <div className="image">
              <img className='folImg' src="https://i.ibb.co/DWpCTh9/Rectangle-6.png" alt="" />
            <span className='fName'>Leisure</span>
            </div>
           
            <div className='follButton'><button>Follow</button></div>
          </div>
          <div className="mainContentFollower mt-4">
            <div className="image">
              <img className='folImg' src="https://i.ibb.co/m676ytK/Rectangle-6-1.png" alt="" />
            <span className='fName'>Activism</span>
            </div>
           
            <div className='follButton'><button>Follow</button></div>
          </div>
          <div className="mainContentFollower mt-4">
            <div className="image">
              <img className='folImg' src="https://i.ibb.co/bz2rFH2/Rectangle-6-2.png" alt="" />
            <span className='fName'>MBA</span>
            </div>
           
            <div className='follButton'><button>Follow</button></div>
          </div>
           <div className="mainContentFollower mt-4">
            <div className="image">
              <img className='folImg' src="https://i.ibb.co/mRFHgVX/Rectangle-6-3.png" alt="" />
            <span className='fName'>Sourov</span>
            </div>
           
            <div className='follButton'><button>Follow</button></div>
          </div>
           <div className="mainContentFollower mt-4">
            <div className="image">
              <img className='folImg' src="#" alt="" />
            <span className='fName'> </span>
            </div>
           
            <div className='follButton'><span><a href="/">See more...</a></span></div>
          </div>
         </div>
           </div>
      </div>
    );
};

export default Allpost;