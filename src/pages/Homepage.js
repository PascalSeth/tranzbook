import React, { useState} from 'react';
import './homepage.css'
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
    <div className='homepage'>
      <div className='background'>    <div className='hlinks'>
    <button
        onClick={() => handleButtonClick('Bus')}
        style={{
          backgroundColor: activeButton === 'Bus' ? '#48A0FF' : '#F2F4F7',
          color: activeButton === 'Bus' ? '#F2F4F7' : '#48A0FF',
        }}
      >
        Bus
      </button>
      <button
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

    </div>
<div className='widgets'>
  <Widgets/>

</div></div>
<div className='whytranzbook'>
<Why activeButton={activeButton}/>
</div>
<div className='fq' id='faq-section' >
  <Faq/>
</div>
    </div>
  )
}

export default Homepage
