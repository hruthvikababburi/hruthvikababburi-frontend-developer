import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className='p-8 h-lvh '>
        <Navbar/>
        <div className='flex flex-col justify-center text-center items-center h-5/6 w-1/2 m-auto'>
            <h2 className='text-white text-2xl font-medium'>When Innovation Meets <span className='text-cyan-dark bg-cyan-300 border-none rounded-xl pl-1 pr-1 mt-1'>Investment</span></h2>
            <p className='text-cyan-200 mt-6'>Empowering Trading Through Advanced Technology</p>
            <button className='bg-cyan-300 p-1 rounded text-sm mt-6 shadow-sm shadow-cyan-300'>Open dApp</button>
        </div>
    </div>
  )
}
