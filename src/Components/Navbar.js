import React from 'react'

export default function Navbar() {
  return (
    <div className=''>
      <nav className='bg-cyan-light p-3 border-cyan-deep-light border-1 rounded-3xl flex flex-row justify-between items-center lg:hidden'>
        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729058562/logo_exwpfo.png' alt='logo' className='h-5'/>
        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729060960/menu_pcjizh.png' alt='menu' className='h-8 cursor-pointer'/>
      </nav>
      <div className='hidden lg:block'>
            <nav className='p-3 flex flex-row justify-between items-center '>
        <div className='flex flex-row items-center'>
            <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729058562/logo_exwpfo.png' alt='logo' className='h-8 mr-2'/>
            <span className='text-white text-lg font-medium'>EthAi</span>
        </div>
        <ul className='bg-cyan-light p-3 border-cyan-deep-light border-1 rounded-3xl flex flex-row justify-between items-center'>
            <li className='text-cyan-700 mr-7 ml-12'>Features</li>
            <li className='text-cyan-700  mr-7'> Why Us</li>
            <li className='text-cyan-700  mr-7'>Tokenomics</li>
            <li className='text-cyan-700 mr-12'>Roadmap</li>
        </ul>
        <div>
            <button className='border-none bg-transparent text-cyan-50 mr-2'>Login</button>
            <button className='bg-cyan-300 p-1 rounded text-sm mt-6 shadow-sm shadow-cyan-300'>Whitepaper</button>
        </div>
            </nav>
      </div>

    </div>
    
  )
}
