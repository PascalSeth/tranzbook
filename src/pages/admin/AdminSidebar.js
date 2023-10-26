import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
export default function AdminSidebar() {
  return (
    <div className='flex flex-col items-center'>
      <div className=' text-white flex flex-col items-center space-y-6 py-[10vh]
        bg-[#48A1FF] rounded-md h-[100%] w-[80%]'>
    <div className='dashicon'>
<HomeOutlinedIcon/>
    </div>
    <div  className='dashicon'>
<SignalCellularAltOutlinedIcon/>
    </div>
    <div  className='dashicon'>
<ConfirmationNumberOutlinedIcon/>
    </div>
    <div  className='dashicon'>
<PeopleAltOutlinedIcon/>
    </div>
    <div  className='dashicon'>
<RouteOutlinedIcon/>        
    </div>
    <div  className='dashicon'>
<SettingsOutlinedIcon/>
    </div>
    <div  className='dashicon'>
<ExitToAppOutlinedIcon/>        
    </div>
      </div>
    </div>
  )
}
