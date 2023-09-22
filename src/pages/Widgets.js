import React from 'react'
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RingVolumeOutlinedIcon from '@mui/icons-material/RingVolumeOutlined';
import {motion} from 'framer-motion'

function Widgets() {
  return (
    <motion.div
    initial={{x:-550}}
          animate={{x:0,}}
          transition={{duration:2.5}}
    className='flex items-center mb-[5vh] mt-[2vh] justify-center w-full'>
         <motion.div className='flex items-center max-md:flex-col '
          
          >
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
      </motion.div>
      <motion.div className='flex  xl:flex md:flex items-center max-md:flex-col '>
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
        </div>      </motion.div>
    </motion.div>
  )
}


export default Widgets
