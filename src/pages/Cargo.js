import React from 'react'
import second from '../picture files/TBcargo.svg'
import Cargoform from './Cargoform'
import './cargo.css'
function Cargo() {
  return (
        <div className='cargo'> 
  <div className='cargoinfo'>

<div className='fillinfo'>
    <h5>Discover trucks for your goods</h5>
<Cargoform/>
</div>

<div className='title2'>
      <h4 className='orange2'>Book A Truck, Move Goods Easily</h4>
      <h5 className='normal2'> Check Cargo Truck availability,Compare Prices Book Your Truck to Move Your Goods</h5>
      <img className='cargimg' src={second} alt=''/>
    </div></div>  
    </div>
  )
}

export default Cargo
