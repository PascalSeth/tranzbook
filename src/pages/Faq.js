import React,{useState} from 'react'
import './faq.css'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import avat from '../picture files/4.png'
function Faq() {
  const [activeButton, setActiveButton] = useState(null); // State variable for tracking active button

  const toggleText = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
  };

  return (
    <div className='faq'>
        <div className='heads'>
      <h3>Frequently Asked Questions</h3>
      <h4>Everything you need to know about the product and billing</h4>
      
      <div className='wrdcontainer'>    
       <div className='wrd'>
      <h4>Is there any free tial available?</h4> {activeButton ===1 && <p>Yes you can try for free for 30 days. If you want, we'll provide you with a free,personalized 30-minute onboarding call to get you up and running as soon as possible. </p>}</div><AddCircleOutlineOutlinedIcon onClick={() => toggleText(1)} className='plus'/>
     

      </div>
      <div className='wrdcontainer'> 
      <div className='wrd'>
      <h4>Can I change my plan later?</h4>{activeButton ===2 && <p>Yes you can try for free for 30 days. If you want, we'll provide you with a free,personalized 30-minute onboarding call to get you up and running as soon as possible. </p>}</div><AddCircleOutlineOutlinedIcon onClick={() => toggleText(2)} className='plus'/>      </div>

      <div className='wrdcontainer'> 
      <div className='wrd'><h4>What is your cancellation policy?</h4>{activeButton ===3 && <p>Yes you can try for free for 30 days. If you want, we'll provide you with a free,personalized 30-minute onboarding call to get you up and running as soon as possible. </p>}</div><AddCircleOutlineOutlinedIcon onClick={() => toggleText(3)} className='plus'/>      </div>

      <div className='wrdcontainer'> 
      <div className='wrd'><h4>Can other info be added to an invoice?</h4>{activeButton ===4 && <p>Yes you can try for free for 30 days. If you want, we'll provide you with a free,personalized 30-minute onboarding call to get you up and running as soon as possible. </p>}</div><AddCircleOutlineOutlinedIcon onClick={() => toggleText(4)} className='plus'/>      </div>

      <div className='wrdcontainer'> 
      <div className='wrd'>  <h4>How does billing work.</h4>{activeButton ===5 && <p>Yes you can try for free for 30 days. If you want, we'll provide you with a free,personalized 30-minute onboarding call to get you up and running as soon as possible. </p>}</div><AddCircleOutlineOutlinedIcon onClick={() => toggleText(5)} className='plus'/>      </div>

      <div className='wrdcontainer'> 
      <div className='wrd'>      <h4>How do i change my account email? </h4>{activeButton ===6 && <p>Yes you can try for free for 30 days. If you want, we'll provide you with a free,personalized 30-minute onboarding call to get you up and running as soon as possible. </p>}</div><AddCircleOutlineOutlinedIcon onClick={() => toggleText(6)} className='plus'/>
      </div></div>

<div className='teamcon'>
    <div className='top'>
    <img src={avat} alt=''/>
    </div>
    <div className='infor'>
        <h4>Still have questions?</h4>
        <h5>Can't find the answer you're looking for? Please chat to our friendly team</h5>
    </div>
    <button><h4>Get in touch</h4></button>
</div>
     
    
      
     
    </div>
  )
}

export default Faq
