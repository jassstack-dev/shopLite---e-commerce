import React from 'react'

const Main = () => {
  return (
    <div className='relative w-full'>
      {/* Hero Image */}
      <img
        src="https://images.meesho.com/images/marketing/1787227877932.webp"
        alt="hero banner"
        className='w-full h-[420px] sm:h-[520px] md:h-[600px] lg:h-[680px] object-cover object-center'
      />

      {/* Gradient Overlay for text readability */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent'></div>

      {/* Text Content */}
      <div className='absolute inset-0 flex items-center px-5 sm:px-10 md:px-16 lg:px-24'>
        <div className='max-w-xl'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-lg'>
            Smart Shopping <br />
            Trusted by Millions
          </h1>

          <p className='mt-3 sm:mt-4 text-sm sm:text-base text-white/85 font-medium max-w-md'>
            Discover trending styles at unbeatable prices — delivered to your doorstep.
          </p>

          <button className='mt-6 sm:mt-8 inline-flex items-center gap-2 bg-white text-[#212121] font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-md hover:bg-neutral-100 active:scale-95 transition-all shadow-md cursor-pointer'>
            Shop Now
            <span className='text-lg'>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main