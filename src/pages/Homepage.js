import React, { useState} from 'react';
import Widgets from './Widgets'
import Why from './Why'
import Faq from './Faq'
import Bus from './Bus'
import Cargo from './Cargo';

function Homepage() {

  
  const [activeButton, setActiveButton] = useState('Bus');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  }
  return (
    <div className='flex flex-col w-full items-center '>
    <div className=' bg-[#DEF5FB] pb-[20vh] flex flex-col items-center mb-[-15vh] rounded-b-[4pc] rounded-bl-[4pc] w-full'>
    <div className='flex '>
 <button
 className='hlinks'
     onClick={() => handleButtonClick('Bus')}
     style={{
       backgroundColor: activeButton === 'Bus' ? '#48A0FF' : '#F2F4F7',
       color: activeButton === 'Bus' ? '#F2F4F7' : '#48A0FF',
     }}
   >
     Bus
   </button>
   <button
       className='hlinks'
     onClick={() => handleButtonClick('Cargo')}
     style={{
       backgroundColor: activeButton === 'Cargo' ? '#48A0FF' : '#F2F4F7',
       color: activeButton === 'Bus' ? '#48A0FF' : '#F2F4F7',
     }}
   >
     Cargo
   </button>
 </div>  
 <div className='Bus'>
 {activeButton === 'Bus' && <Bus />}
   {activeButton === 'Cargo' && <Cargo />}

 </div></div>
 <div>
     <Widgets/>
 </div>
     <div>
       <Why/>
     </div>
     <div className='fq' id='faq-section' >
<Faq/>
</div>
 </div>
  )
}

export default Homepage
