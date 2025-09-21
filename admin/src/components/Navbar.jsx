import React, {useContext} from 'react'
import { assets } from '../assets/assets'
import {AdminContext} from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {

    const {aToken, setAToken} = useContext(AdminContext);
    const {dToken, setDToken} = useContext(DoctorContext)
    const navigate = useNavigate();

    const  logout = () => {
        navigate('/');
        aToken && setAToken('');
        aToken && localStorage.removeItem('aToken');
        dToken && setDToken('');
        dToken && localStorage.removeItem('dToken');
    }
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
{/*         <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" /> */}
          <div
                onClick={()=>{navigate('/'); scrollTo(0,0)}}
                className="w-44 cursor-pointer flex items-center justify-center p-1 rounded-lg bg-green-500 text-white text-2xl font-extrabold tracking-wide shadow-md select-none"
                style={{ backgroundColor: '#22c55e', letterSpacing: '0.05em' }}
            >
                DocUp
            </div>
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-500'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
