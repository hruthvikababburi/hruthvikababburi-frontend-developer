import React from 'react'

export default function ExploreUs() {
  return (
    <div className='border-1 border-cyan-700 bg-transparent shadow-inner shadow-cyan-400 rounded-md p-3 m-3 mb-0 flex flex-col justify-center items-center text-center'>
      <h2 className='text-white text-2xl mb-6'>Explore Our <span className='text-cyan-400'>dApp</span></h2>
      <p className='text-white text-sm'>EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI Features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.</p>
      <button className='bg-cyan-300 p-1 rounded text-sm mt-6 shadow-sm shadow-cyan-300 mb-5'>Open dApp</button>
    </div>
  )
}
