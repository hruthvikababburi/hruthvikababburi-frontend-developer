import React from 'react'

export default function Features() {
  return (
    <div className='p-8'>
      <h1 className='text-white text-2xl pb-2 text-center font-medium'>Our Features</h1>
      <div className='bg-cyan-light border-1 border-cyan-deep-light rounded-md mt-5 p-3 text-center flex flex-col justify-center items-center'>
        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729061113/img4_ucxhvm.png' alt='img' className='h-16 m-2'/>
        <h2 className='text-white pt-1'>Trade Optimizer</h2>
        <p className='text-cyan-200 pt-1 text-sm'>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
      </div>
      <div className='bg-cyan-light border-1 border-cyan-deep-light rounded-md mt-5 p-3 text-center flex flex-col justify-center items-center'>
        <h2 className='text-white pt-1'>Market Insight</h2>
        <p className='text-cyan-200 pt-1 text-sm'>Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
      </div>
      <div className='bg-cyan-light border-1 border-cyan-deep-light rounded-md mt-5 p-3 text-center flex flex-col justify-center items-center'>
        <h2 className='text-white pt-1'>Risk Guard</h2>
        <p className='text-cyan-200 pt-1 text-sm'>Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.</p>
        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729061099/img3_jfcmxu.png' alt='img' className='h-44 m-4'/>
      </div>
      <div className='bg-cyan-light border-1 border-cyan-deep-light rounded-md mt-5 flex flex-row justify-between p-3 pb-0 pr-0'>
        <div className='pb-3'>
            <h2 className='text-white pt-1'>Portfolio Sync</h2>
            <p className='text-cyan-200 pt-1 text-sm'>Easilty manage your portfolio. You'll always know what you own, how it's performing, and where it's headed.</p>
        </div>
        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729061076/amount_gqgi6t.png' alt='img' className='h-14 self-end p-0 m-0'/>
      </div>
      <div className='bg-cyan-light border-1 border-cyan-deep-light rounded-md mt-5 flex flex-col p-3 pb-0 pr-0'>
        <div className='pb-3'>
            <h2 className='text-white pt-1'>Opportunity Scout</h2>
            <p className='text-cyan-200 pt-1 text-sm'>Find exciting new projects, events and tokens that others might be missing. Identifying promising opportinities eraly, so you never miss out on next big thing.</p>
        </div>
        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729061064/magnifying_obj_sdqqml.png' alt='img' className='h-20 self-end p-0 m-0'/>
      </div>


    </div>
  )
}
