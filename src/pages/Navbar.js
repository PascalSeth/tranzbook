import React, { useEffect, useState} from 'react';
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
import { useDispatch } from 'react-redux';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import {  signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import auth from '../firebase/config'
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../redux/features/authSlice';
import { Avatar } from '@mui/material';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ShowOnLogin, { ShowOnLogOut } from './hiddenlinks';


function Navbar() {  
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [displayName, setdisplayName] = useState("");
  const[photoURL,setphotoURL]=useState(null)
  const dispatch=useDispatch();

    useEffect(() => {
      const auths=getAuth()
    onAuthStateChanged(auths, (user) => {
      if (user) {
        console.log(user)
        if (user.displayName==null){
          const userEmailName= user.email.substring(0, user.email.indexOf("@"))
          const uName =userEmailName.charAt(0).toUpperCase() + userEmailName.slice(1)
          setdisplayName(uName)
        } else{
          setdisplayName(user.displayName)
        }
        setphotoURL(user.photoURL); // <-- Add this line

        dispatch(SET_ACTIVE_USER({
          email:user.email,
          userName:user.displayName?user.displayName: displayName,
          userID:user.uid,
          photoURL:user.photoURL
        }))
      } else {
        setdisplayName("")
        dispatch(REMOVE_ACTIVE_USER())
      }
    });
  },[dispatch,displayName])


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

  const logoutUser=()=>{
    const auths=getAuth()
    signOut(auths).then(() => {
toast.success("Logged Out Successfully")    
}).catch((error) => {
toast.error("Unable to LogOut")  
  });
  }



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
      <ShowOnLogOut>
        <button onClick={handleLoginClick} className='logb text-black bg-[#F2F4F7]'>
          <h5>Log in</h5>
        </button>
        <button onClick={handleSignupClick} className='logb'>
          <h5>Sign up</h5>
        </button>
        </ShowOnLogOut>
        <ShowOnLogin>
          <button className='mr-3'>       {photoURL ? (
            <img src={photoURL} className='rounded-full' height={50} width={50} alt='User Avatar' />
          ) : (
            <Avatar alt='User Avatar' />
          )}</button>
 
        <button onClick={logoutUser} className='logb'>
          <h5>Log Out</h5>
        </button> 
        </ShowOnLogin>
        {showLogin && <Login handleClose={handleCloseClick} />}
        {showSignup && <Signup handleClose={handleCloseClick} />}
      </div>
      
      
       {/* Mobile Menu */}
       <div className='lg:hidden flex justify-between items-center  w-full'>
        <div className=' flex max-w-6xl p-[1vh] m-auto justify-between w-screen '>
          <Link href="/" className='left-header items-center'>
            <img src={logohead} alt='logo' width={150} height={60} className='object-contain bg-none' />
          </Link>
          <div className='rightHead-md z-[999]'>
            <MenuIcon className='hover:cursor-pointer text-[4vh] ' onClick={toggleMenu} />
          </div>
        </div>
        {isMenuOpen && (
          <div className='lg:hidden  w-full fixed h-screen z-50 left-0 right-0 top-0'>
            {/* Your side menu content goes here */}
            
            <div className='fixed bg-white flex flex-col h-screen border rounded-md fright-0 w-[60%]  z-50 '>
              <Link href="/components/"  className='textLinkpop'>Service</Link >
              <Link href="/components/"  className='textLinkpop'>Software</Link >
              <Link href="/components/"  className='textLinkpop'>Job</Link >
              <Link href="/components/"  className='textLinkpop'>Blog</Link >
              <Link href="/components/"  className='textLinkpop'>Browse Categories</Link >
              <Link href="/components/"  className='textLinkpop'>Contact</Link >
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
