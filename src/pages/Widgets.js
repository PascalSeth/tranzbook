import React from 'react'
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RingVolumeOutlinedIcon from '@mui/icons-material/RingVolumeOutlined';import './widgets.css'

function Widgets() {
  return (
    <div className='widgets'>

      <div className='container'>
        <div className='iconc'>
        <DirectionsBusFilledOutlinedIcon className='icon'/></div>
        <div className='caption'>
        <h4 className='h4'>Traveling to any region in Ghana?
</h4>
        <h6 className='h6'>Find a comfortable and safe bus for your travel. Do not stress, just TranzBook it.</h6>
        </div>
      </div>

      <div className='container'>
        <div className='iconc'>
<LocalShippingOutlinedIcon className='icon'/></div>
        <div className='caption'>
        <h4 className='h4'>Concern about your goods?</h4>
        <h6 className='h6'>Find and book safe and low fare trucks/cargos for your goods.</h6>
        </div>
      </div>

      <div className='container'>
      <div className='iconc'>
<CompareArrowsIcon className='icon'/></div>
        <div className='caption'>
        <h4 className='h4'>To and from Ghana?</h4>
        <h6 className='h6'>Find cars to Nigeria, Togo, Benin, Burkina Faso, Côte d'Ivoire, Mali etc</h6>
        </div>
      </div>
      <div className='container'>
      <div className='iconc'>
        <RingVolumeOutlinedIcon className='icon'/></div>
        <div className='caption'>
        <h4 className='h4'>24/7 Support</h4>
        <h6 className='h6'>Our amazing team is on standby to help you.</h6>
        </div>
      </div>
    </div>
  )
}


export default Widgets
