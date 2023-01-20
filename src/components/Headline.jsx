import React from 'react'

const Headline = ({ text }) => {
    return (
        <div className='max-w-[90%] mx-auto mt-3 py-1 md:py-4 px-2'>
            <div className='text-[20px] md:text-[40px] text-black font-[Josefin Sans] font-light tracking-normal'>{text}</div>
        </div>
    )
}

export default Headline