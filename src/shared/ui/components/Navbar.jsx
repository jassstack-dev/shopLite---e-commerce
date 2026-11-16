import { ShoppingBag } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const cartItems = useSelector((state)=> state.cart.cartItems)


  return (
    <nav className='sticky top-0 z-50 bg-white/90 backdrop-blur-md px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6 grid grid-cols-3 items-center text-neutral-900 border-b border-neutral-100'>
      {/* Left: Asymmetric Minimal Menu Lines (mobile: toggle menu) */}
      <div className='justify-self-start'>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className='flex flex-col gap-[3.5px] py-2 pr-4 cursor-pointer group'
          aria-label='Toggle menu'
        >
          <span className='w-4 h-[1.5px] bg-neutral-900 transition-all group-hover:w-3.5'></span>
          <span className='w-3 h-[1.5px] bg-neutral-900 transition-all group-hover:w-4'></span>
          <span className='w-2 h-[1.5px] bg-neutral-900 transition-all group-hover:w-3'></span>
        </button>
      </div>

      {/* Center: Brand */}
      <div className='justify-self-center text-[18px] sm:text-[20px] md:text-[21px] font-semibold tracking-tight lowercase select-none cursor-pointer'>
        shoplite
      </div>

      {/* Right: Desktop links + Bag */}
      <div className='justify-self-end flex items-center gap-4 sm:gap-5 md:gap-7 text-[12px] font-medium text-neutral-800'>
        {/* Desktop-only links */}
        <div className='hidden md:flex items-center gap-7'>
          <p className='hover:text-neutral-400 transition-colors cursor-pointer'>Search</p>
          <p className='hover:text-neutral-400 transition-colors cursor-pointer'>Help</p>
          <p className='hover:text-neutral-400 transition-colors cursor-pointer'>My account</p>
        </div>

        <NavLink
          to={'products/cart'}
          className='relative flex items-center cursor-pointer group ml-1'
        >
          <ShoppingBag className='w-[17px] h-[17px] stroke-[1.6] text-neutral-900 group-hover:opacity-70 transition-opacity' />
          <span className='absolute -top-1.5 -right-2 bg-neutral-900 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center'>
            {cartItems.length}
          </span>
        </NavLink>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-sm px-6 py-4 flex flex-col gap-4 text-[13px] font-medium text-neutral-800'>
          <p className='hover:text-neutral-400 transition-colors cursor-pointer'>Search</p>
          <p className='hover:text-neutral-400 transition-colors cursor-pointer'>Help</p>
          <p className='hover:text-neutral-400 transition-colors cursor-pointer'>My account</p>
        </div>
      )}
    </nav>
  )
}

export default Navbar