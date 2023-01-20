import React from 'react'

const HeadlineContainer = ({ text, btnText }) => {
    return (
        <div className='flex justify-between items-center max-w-[90%] mx-auto mt-3 py-1 md:py-4 px-2'>
            <div className='text-[30px] md:text-[40px] text-black font-[Josefin Sans] font-light tracking-normal'>{text}</div>
            <div className='bg-[#E5E5E5] text-black tracking-wide py-[5px] md:py-[8px] px-[10px] md:px-[12px] font-[Josefin Sans] text-[12px] md:text-[15px] rounded-lg cursor-pointer hover:bg-black hover:text-[#E5E5E5] hover:transition-all'>{btnText}</div>
        </div> 
    )
}

export default HeadlineContainer