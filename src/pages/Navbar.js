import React, { useState} from 'react';
import logohead from '../picture files/L1 3.png';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SchoolIcon from '@mui/icons-material/School';
import CampaignIcon from '@mui/icons-material/Campaign';
import WorkIcon from '@mui/icons-material/Work';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import AgricultureIcon from '@mui/icons-material/Agriculture';

function Navbar() {
  const handleFAQClick = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      const yOffset = -50; // Offset for navbar height
      const y = faqSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
    }
  };
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showOptions, setShowOptions] = useState(false); // State variable for showing/hiding the options in the dropdown menu
  const [navbar,setNavbar] =useState(false)
  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };

  const handleResourcesMouseEnter = () => {
    setShowResources(true);
  };

  const handleResourcesMouseLeave = () => {
    setShowResources(false);
    setShowOptions(false); // Reset the state of showOptions when leaving the resources dropdown
  };

  const handleOptionsMouseEnter = () => {
    setShowOptions(true);
  };

  const handleOptionsMouseLeave = () => {
    setShowOptions(false);
  };

  const handleCloseClick = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div className='flex m-0 justify-between top-0  mx-auto z-[999] p-[1.6vh] sticky w-auto bg-[#DEF5FB] items-center'>
        
        <div className='flex w-full items-center max-w-7xl mx-auto '>
     <Link to='/' className='linksi' >
          <img src={logohead} alt='' />
        </Link> 
        <div className='linksc  max-lg:hidden'>
          <Link to='/about' className='links'>
            About Us
          </Link>
          <div
            className='dropdown'
            onMouseEnter={handleResourcesMouseEnter}
            onMouseLeave={handleResourcesMouseLeave}
          >
            <h5 className='linksw'>
              Products<KeyboardArrowDownOutlinedIcon />
            </h5>
            {showResources && (
              <div
                className={`dropdown-content ${showOptions ? 'show-options' : ''}`}
                onMouseEnter={handleOptionsMouseEnter}
                onMouseLeave={handleOptionsMouseLeave}
              >
                <Link href='' className='linksd' >
                 <DepartureBoardIcon className='dropicon'/> Bus Booking
                </Link>
                <Link href='' className='linksd' >
                 <LocalShippingIcon className='dropicon'/> Truck Booking
                </Link>
                <Link href='' className='linksd' >
                 <AgricultureIcon className='dropicon'/> Agro Prefinancing
                </Link>
                <Link href='' className='linksd' >
                <SchoolIcon className='dropicon'/>  Schools Booking
                </Link>
              </div>
            )}
          </div>
          <div
            className='dropdown'
            onMouseEnter={handleResourcesMouseEnter}
            onMouseLeave={handleResourcesMouseLeave}
          >
            <h5 className='linksw'>
              Resources<KeyboardArrowDownOutlinedIcon />
            </h5>
            {showResources && (
              <div
                className={`dropdown-content ${showOptions ? 'show-options' : ''}`}
                onMouseEnter={handleOptionsMouseEnter}
                onMouseLeave={handleOptionsMouseLeave}
              >
                <Link href='' className='linksd' >
                 <CampaignIcon className='dropicon'/> Blog
                </Link>
                <Link href='' className='linksd' >
                 <WorkIcon className='dropicon'/> Careers
                </Link>
                <Link href='' className='linksd' >
                 <CollectionsBookmarkIcon className='dropicon'/> Gallery
                </Link>
                <Link to='/' onClick={handleFAQClick} className='linksd' >
                 <HelpIcon className='dropicon'/> FAQ
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
              
      <div className='flex items-center  max-lg:hidden'>
        <button onClick={handleLoginClick} className='logb text-black bg-[#F2F4F7]'>
          <h5>Log in</h5>
        </button>
        <button onClick={handleSignupClick} className='logb'>
          <h5>Sign up</h5>
        </button>
        {showLogin && <Login handleClose={handleCloseClick} />}
        {showSignup && <Signup handleClose={handleCloseClick} />}
      </div>
      <div className=''>
<button className='fill-black lg:hidden p-2' onClick={()=>setNavbar(!navbar)}>
{navbar ? (
<CloseIcon/>
):(<MenuIcon
className='focus:border-none active:border-none'/>)}
</button>
      </div>
    </div>
  );
}

export default Navbar;
