import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className='bg-cyan-light p-3 border-cyan-deep-light border-1 rounded-3xl flex flex-row justify-between items-center'>
        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729058562/logo_exwpfo.png' alt='logo' className='h-5'/>
        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729060960/menu_pcjizh.png' alt='menu' className='h-8 cursor-pointer'/>
      </nav>
    </div>
  )
}
