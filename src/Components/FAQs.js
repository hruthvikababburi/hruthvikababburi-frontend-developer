import React from 'react'

export default function FAQs() {
  return (
    <div className='p-8 h-lvh flex flex-col justify-center'>
        <h1 className='text-white text-2xl pb-2 text-center font-medium mb-8 items-start'>Frequently Asked Questions</h1>
        <ul>
            <li className='text-white flex flex-row justify-start items-center mb-6'>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729077093/Container_xnsmxj.png' alt='right-icon' className='h-3 mr-2'/>
                <span>What is EthAi</span>
            </li>
            <li className='text-white flex flex-row justify-start items-center mb-6'>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729077093/Container_xnsmxj.png' alt='right-icon' className='h-3 mr-2'/>
                <span>How can EthAi help me as a Trader?</span>
            </li>
            <li className='text-white flex flex-row justify-start items-center mb-6'>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729077093/Container_xnsmxj.png' alt='right-icon' className='h-3 mr-2'/>
                <span>Who can use EthAi</span>
            </li>
            <li className='text-white flex flex-row justify-start items-center mb-6'>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729077093/Container_xnsmxj.png' alt='right-icon' className='h-3 mr-2'/>
                <span>How does EthAi track smart money flow?</span>
            </li>
            <li className='text-white flex flex-row justify-start items-center mb-6'>
                <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729077093/Container_xnsmxj.png' alt='right-icon' className='h-3 mr-2'/>
                <span>How does it ensure data security?</span>
            </li>
                
        </ul>
    </div>
  )
}
