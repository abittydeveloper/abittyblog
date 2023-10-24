import React, { useEffect, useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';

const Header = () => {

  const [login , setlogin] = useState(false)
  const [open ,setopen]= useState(false)
  const [close ,setclose]= useState(true)
  const [handleClose ,sethandleClose]= useState(false)
  const anchor = "left"
  const storedString = localStorage.getItem('userToken');
 
  const toggleDrawer = () => {
    setopen(!open);
  };
  const logout = ()=>{
    localStorage.removeItem('userToken');
    setlogin(false)
  }
useEffect(()=>{
  if (storedString) {
    const storedData = JSON.parse(storedString);
    setlogin(true)
  }
},[])
  return (
    <header className='flex justify-between px-3 md:justify-around items-center py-5 border-b-2 border-blue-500'>
      <Link to="/"><div className='text-2xl cursor-pointer'>Abitty <span className='text-blue-500 text-sm'>Blog</span></div></Link>
      <div className='hidden md:block '>
        <div className='flex justify-center  items-center text-zinc-500 cursor-pointer gap-4'>
          <SearchIcon />
          <LightModeIcon />{ login ? <>
            <Link to="/write"><button className=' rounded-full border-solid border-2 py-2 px-7 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white'>Write</button></Link>
          <button onClick={logout} className='rounded-full bg-blue-500 py-2 px-7 border-solid border-2 text-white border-blue-500 hover:text-blue-500 hover:bg-white '>Logout</button>
           </>:
          <>
          <Link to="/login"><button className=' rounded-full border-solid border-2 py-2 px-7 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white'>Login</button></Link>
          <Link to="/register"><button className='rounded-full bg-blue-500 py-2 px-7 border-solid border-2 text-white border-blue-500 hover:text-blue-500 hover:bg-white '>Get started</button></Link>
          </>
          }
          
        </div>
      </div>
      <div className='md:hidden' onClick={toggleDrawer}>
        <div className='gap-5 flex justify-center items-center text-zinc-500 cursor-pointer '><SearchIcon /> <LightModeIcon /> <DehazeIcon className='text-below' /></div></div>

        <Drawer
            anchor={anchor}
            open={open}
            onClose={toggleDrawer}
          >
            <div style={{width:"250px"}} onClick={toggleDrawer}>
          { login ? <>
            <div className="mt-7 flex justify-center flex-col items-center">
          <Link to="/write"><button className='mb-7 rounded-full border-solid border-2 py-2 px-7 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white'>write</button></Link>
          <button onClick={()=>setlogin(false)} className='rounded-full bg-blue-500 py-2 px-7 border-solid border-2 text-white border-blue-500 hover:text-blue-500 hover:bg-white '>Logout</button>
          </div>          </>:
          <div className="mt-7 flex justify-center flex-col items-center">
          <Link to="/login"><button className='mb-7 rounded-full border-solid border-2 py-2 px-7 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white'>Login</button></Link>
          <Link to="/register"><button className='rounded-full bg-blue-500 py-2 px-7 border-solid border-2 text-white border-blue-500 hover:text-blue-500 hover:bg-white '>Get started</button></Link>
          </div>
          }</div>
          </Drawer>
    </header>
  )
}

export default Header