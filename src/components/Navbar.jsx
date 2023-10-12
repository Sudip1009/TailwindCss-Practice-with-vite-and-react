import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineFavorite } from 'react-icons/md';
import { FaWallet, FaUserFriends,FaUserAlt } from 'react-icons/fa';
import { BiSolidHelpCircle,BiLogOut } from 'react-icons/bi';
import { useState } from 'react';

import {Link} from 'react-router-dom'

function Navbar() {
  const [nav, setNav] = useState(false)


  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>

      <div className='flex items-center'>
        <div className='cursor-pointer' onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <Link to="/" className='text-2xl sm:text-3xl lg:text-4xl px-4'>
          Best<span className='font-bold'>Eats</span>
        </Link>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>DELIVERY</p>
          <p className='p-2'>TAKEAWAY</p>
        </div>
      </div>

      <div className='bg-gray-300 rounded-full flex items-center px-2 w-[300px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20} />
        <input className='bg-transparent w-full p-2 focus:outline-none' type="text" placeholder='Search food here' />
      </div>
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' />Cart
      </button>

      {/* Mobile menu */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ""}


      <div className={nav ? 'bg-white w-[300px] h-screen z-10 fixed left-0 top-0 duration-300' : 'bg-white w-[300px] h-screen z-10 fixed left-[-100%] top-0 duration-300'}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute top-4 right-4 cursor-pointer' />
        <Link to="/" className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </Link> 
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='w-[100px] text-xl py-4 flex hover:underline decoration-orange-500 decoration-2'><FaUserAlt size={25} className='mr-4' /><Link to="/profile">Profile</Link></li>
            <li className='w-[100px] text-xl py-4 flex hover:underline decoration-orange-500 decoration-2'><TbTruckDelivery size={25} className='mr-4' /><Link to="/orders">Orders</Link></li>
            <li className='w-[120px] text-xl py-4 flex hover:underline decoration-orange-500 decoration-2'><MdOutlineFavorite size={25} className='mr-4' /><Link to="/favorites">Favorites</Link></li>
            <li className='w-[100px] text-xl py-4 flex hover:underline decoration-orange-500 decoration-2'><FaWallet size={25} className='mr-4' /><Link to="/wallet">Wallet</Link></li>
            <li className='w-[100px] text-xl py-4 flex hover:underline decoration-orange-500 decoration-2'><BiSolidHelpCircle size={25} className='mr-4' /><Link to="/help">Help</Link></li>
            <li className='w-[160px] text-xl py-4 flex hover:underline decoration-orange-500 decoration-2'><FaUserFriends size={25} className='mr-4' /><Link to="/">Invite Friends</Link></li>
            <li className='w-[120px] text-xl py-4 flex hover:underline decoration-orange-500 decoration-2'><BiLogOut size={25} className='mr-4' /><Link to="/">Log Out</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;