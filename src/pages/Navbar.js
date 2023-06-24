import React, { useState} from 'react';
import one from '../picture files/L1 3.png';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './navbar.css';
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
    <div className='navbar'>
      <div className='left'>
        <Link className='linksi' to={'/'}>
          <img src={one} alt='' />
        </Link>
        <div className='linksc'>
          <Link className='links' to={'/about'}>
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
                <Link className='linksd' to='/blog'>
                 <DepartureBoardIcon className='dropicon'/> Bus Booking
                </Link>
                <Link className='linksd' to='/careers'>
                 <LocalShippingIcon className='dropicon'/> Truck Booking
                </Link>
                <Link className='linksd' to='/gallery'>
                 <AgricultureIcon className='dropicon'/> Agro Prefinancing
                </Link>
                <Link className='linksd' to='/gallery'>
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
                <Link className='linksd' to='/blog'>
                 <CampaignIcon className='dropicon'/> Blog
                </Link>
                <Link className='linksd' to='/careers'>
                 <WorkIcon className='dropicon'/> Careers
                </Link>
                <Link className='linksd' to='/gallery'>
                 <CollectionsBookmarkIcon className='dropicon'/> Gallery
                </Link>
                <Link className='linksd' to='/' onClick={handleFAQClick}>
                 <HelpIcon className='dropicon'/> FAQ
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='right'>
        <button onClick={handleLoginClick} className='loginb'>
          <h5>Log in</h5>
        </button>
        <button onClick={handleSignupClick} className='signupb'>
          <h5>Sign up</h5>
        </button>
        {showLogin && <Login handleClose={handleCloseClick} />}
        {showSignup && <Signup handleClose={handleCloseClick} />}
      </div>
    </div>
  );
}

export default Navbar;
