import React from 'react'
import './homeLayout.css'

const HeroContainer = ({img, title, text, desc}) => {
    return (
        <div className='my-2'>
            <div className='max-w-[90%] mx-auto h-[100%] md:h-screen'>
                <img src={img} alt='men_shoe' className='w-full h-[100%] object-cover rounded-2xl'/>
            </div>
            <div className='max-w-[90%] mt-[25px] md:mt-[30px] text-center mx-auto'>
               <h2 className='text-[16px] md:text-[20px] text-black font-bold tracking-wide'>{title}</h2>
               <div className='text_header'>{text}</div> 
               <div className='text_header_mobile'>{text}</div> 
               <div className='tracking-wide text-black text-[12px] md:text-[18px] mb-[10px]'>{desc}</div>
               <button className='bg-black text-[#E5E5E5] py-[8px] md:py-[10px] px-[13px] md:px-[15px] rounded-full border-none cursor-pointer text-[14px] md:text-[18px] transform transition duration-300 ease-out hover:bg-[#FCA311] hover:text-black'>Shop</button>
            </div>
        </div>
    )
}

export default HeroContainer