import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center bg-dark-blue p-16 lg:flex lg:flex-row lg:justify-between lg:items-center'>
        <div name="first-part">
            <div className='flex flex-row items-center'>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729058562/logo_exwpfo.png' alt='logo' className='h-6 mr-3'/>
                <h1 className='text-white font-medium text-3xl'>EthiAi</h1>
            </div>
            <div className='flex flex-row justify-center items-center mt-5'>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729078941/telegram_tcj1ji.png' alt='Telegram' className='h-5 mr-2 cursor-pointer'/>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729078927/instagram_2_vwqok2.png' alt='Instagram' className='h-5 mr-2 cursor-pointer'/>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729078930/discord_1_oay4vg.png' alt='Icon' className='h-5 mr-2 cursor-pointer'/>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729078934/Facebook_tmfyju.png' alt='Facebook' className='h-5 mr-2 cursor-pointer'/>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729078938/discord_xtqhef.png' alt='Discord' className='h-5 mr-2 cursor-pointer'/>
            </div>
        </div>
        <div className='hidden lg:block'>
            <h3 className='text-white text-2xl font-medium mb-5' >"Designed for traders of today, just like you."</h3>
            <div className='border-1 border-gray-400 rounded-md flex flex-row justify-between items-center pl-2 pr-2'>
                <span className='text-white text-sm'>What's your work email?</span>
                <button className='p-2 m-1 rounded lg:text-sm lg:shadow-sm lg:shadow-cyan-300 lg:bg-transparent lg:text-cyan-50'>Open dApp</button>
            </div>
        </div>
      
    </div>
  )
}
