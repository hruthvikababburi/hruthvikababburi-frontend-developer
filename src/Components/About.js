import React from 'react'

export default function About() {
  return (
    <div className='p-8'>
      <div className='text-center'>
        <h1 className='text-white text-2xl pb-2 text-center font-medium'>About EthAi</h1>
        <p className='text-cyan-200 pt-1 text-sm'>At EthAi, we're all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders' movements.</p>
        <button className='bg-cyan-300 p-1 rounded text-sm mt-6 shadow-sm shadow-cyan-300'>Read more</button>
      </div>
      <div className='bg-cyan-light border-1 border-cyan-deep-light rounded-lg p-3 mt-8 '>
        <div className='mt-8'>
            <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729073748/graph_gmavsf.png' alt='icon' className='h-5'/>
            <h5 className='text-white pt-1'>Stay Ahead</h5>
            <p className='text-cyan-200 pt-1 text-sm'>No more guesswork-get clear, trustable insights.</p>
        </div>
        <div className='mt-8'>
            <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729073747/wallet_taijn4.png' alt='icon'  className='h-5'/>
            <h5 className='text-white pt-1'>Know Your Assets</h5>
            <p className='text-cyan-200 pt-1 text-sm'>Always stay on top of how your investments are performing.</p>
        </div>
        <div className='mt-8'>
            <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729073746/Vector_lruokc.png' alt='icon'  className='h-5'/>
            <h5 className='text-white pt-1'>Simple, Not Overwhelming</h5>
            <p className='text-cyan-200 pt-1 text-sm'>Our tols are designed to make comple market analysis easy to understand and act on.</p>
        </div>
        <div className='mt-8 mb-8'>
            <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729073746/Future_Technology_cwlvgq.png' alt='icon'  className='h-5'/>
            <h5 className='text-white pt-1'>Future-Proof</h5>
            <p className='text-cyan-200 pt-1 text-sm'>We're constantly improving, adding new features to help you make the most informed decisions possible.</p>
        </div>
      </div>
    </div>
  )
}
