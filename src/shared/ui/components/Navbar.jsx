import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className='bg-white px-10 py-6 grid grid-cols-3 items-center text-neutral-900 '>
      {/* Left: Asymmetric Minimal Menu Lines */}
      <div className='justify-self-start'>
        <button className='flex flex-col gap-[3.5px] py-2 pr-4 cursor-pointer group'>
          <span className='w-4 h-[1.5px] bg-neutral-900 transition-all group-hover:w-3.5'></span>
          <span className='w-3 h-[1.5px] bg-neutral-900 transition-all group-hover:w-4'></span>
          <span className='w-2 h-[1.5px] bg-neutral-900 transition-all group-hover:w-3'></span>
        </button>
      </div>

      {/* Center: Exact Center Brand Typography ("abloke" vibe) */}
      <div className='justify-self-center text-[21px] font-semibold tracking-tight lowercase select-none cursor-pointer'>
        shoplite
      </div>

      {/* Right: Clean Text Links + Bag with Badge */}
      <div className='justify-self-end flex items-center gap-7 text-[12px] font-medium text-neutral-800'>
        <p className='hover:text-neutral-400 transition-colors cursor-pointer'>Search</p>
        <p className='hover:text-neutral-400 transition-colors cursor-pointer'>Help</p>
        <p className='hover:text-neutral-400 transition-colors cursor-pointer'>My account</p>
        
        <NavLink to={'products/cart'} className='relative flex items-center cursor-pointer group ml-1'>
          <ShoppingBag className='w-[17px] h-[17px] stroke-[1.6] text-neutral-900 group-hover:opacity-70 transition-opacity' />
          <span className='absolute -top-1.5 -right-2 bg-neutral-900 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center'>
            2
          </span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar