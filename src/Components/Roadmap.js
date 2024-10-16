import React from 'react'

export default function Roadmap() {
  return (
    <div className='p-8'>
        <h1 className='text-white text-2xl pb-2 text-center font-medium lg:text-3xl lg:mb-16'>Roadmap</h1>
        <div className='mt-10 lg:flex lg:flex-row lg:justify-between lg:items-center' name='phase1'>
            <div>
                <span className='bg-white p-1 text-sm border-0 rounded-sm text-black'>PHASE 1</span>
                <h3 className='text-white text-3xl mt-8 mb-10'>Kicking Off</h3>
                <ul>
                    <li className='text-white flex flex-row justify-start items-center mb-4'>
                        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729075681/Image_1_ejwncq.png' alt='right-icon' className='h-5 mr-2'/>
                        <span>Launch of EthAi: Officially</span>
                    </li>
                    <li className='text-white flex flex-row justify-start items-center mb-4'>
                        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729075681/Image_1_ejwncq.png' alt='right-icon' className='h-5 mr-2'/>
                        <span>Development of Core AI Agents</span>
                    </li>
                    <li className='text-white flex flex-row justify-start items-center mb-4'>
                        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729075681/Image_1_ejwncq.png' alt='right-icon' className='h-5 mr-2'/>
                        <span>Unser Onboarding Campaign</span>
                    </li>
                    <li className='text-white flex flex-row justify-start items-center mb-4'>
                        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729075681/Image_1_ejwncq.png' alt='right-icon' className='h-5 mr-2'/>
                        <span>Community Engagement Initiatives</span>
                    </li>
                </ul>
            </div>
            <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729061009/img1_mb5jjz.png' alt='phase-img' className='mt-5'/>
        </div>
        <div className='mt-10 lg:flex lg:flex-row lg:justify-between lg:items-center' name='phase2'>
            <div className='lg:order-1'>
                <span className='bg-white p-1 text-sm border-0 rounded-sm text-black'>PHASE 2</span>
                <h3 className='text-white text-3xl mt-8 mb-10'>Bigger Insights</h3>
                <ul>
                    <li className='text-white flex flex-row justify-start items-center mb-4'>
                        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729075681/Image_1_ejwncq.png' alt='right-icon' className='h-5 mr-2'/>
                        <span>Introduction of Advanced AI agents</span>
                    </li>
                    <li className='text-white flex flex-row justify-start items-center mb-4'>
                        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729075681/Image_1_ejwncq.png' alt='right-icon' className='h-5 mr-2'/>
                        <span>Strategic Partnerships</span>
                    </li>
                    <li className='text-white flex flex-row justify-start items-center mb-4'>
                        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729075681/Image_1_ejwncq.png' alt='right-icon' className='h-5 mr-2'/>
                        <span>User Interface Optimization</span>
                    </li>
                    <li className='text-white flex flex-row justify-start items-center mb-4'>
                        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729075681/Image_1_ejwncq.png' alt='right-icon' className='h-5 mr-2'/>
                        <span>Comprehensive Marketing Campaign</span>
                    </li>
                </ul>
            </div>
            
            <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729076805/image_2_zvryeg.png' alt='phase-img' className='mt-5'/>
        </div>
        <div className='mt-10 lg:flex lg:flex-row lg:justify-between lg:items-center' name='phase3'>
            <div>
                <span className='bg-white p-1 text-sm border-0 rounded-sm text-black'>PHASE 3</span>
                <h3 className='text-white text-3xl mt-8 mb-10'>Full Power</h3>
                <ul>
                    <li className='text-white flex flex-row justify-start items-center mb-4'>
                        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729075681/Image_1_ejwncq.png' alt='right-icon' className='h-5 mr-2'/>
                        <span>Introduction of Enhanced Features</span>
                    </li>
                    <li className='text-white flex flex-row justify-start items-center mb-4'>
                        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729075681/Image_1_ejwncq.png' alt='right-icon' className='h-5 mr-2'/>
                        <span>API Integration foe Data Access</span>
                    </li>
                    <li className='text-white flex flex-row justify-start items-center mb-4'>
                        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729075681/Image_1_ejwncq.png' alt='right-icon' className='h-5 mr-2'/>
                        <span>Launch of Community-Driven Initiatives</span>
                    </li>
                    <li className='text-white flex flex-row justify-start items-center mb-4'>
                        <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729075681/Image_1_ejwncq.png' alt='right-icon' className='h-5 mr-2'/>
                        <span>Continuous Improvement and Updates</span>
                    </li>
                </ul>
            </div>
            <img src='https://res.cloudinary.com/dhumgt3fp/image/upload/v1729061032/img2_rvntus.png' alt='phase-img' className='mt-5'/>
        </div>
    </div>
  )
}
