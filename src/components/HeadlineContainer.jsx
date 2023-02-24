import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeadlineContainer = ({ text, btnText }) => {
    const Navigate = useNavigate();

    const linkToHomePage = () => {
        if (text.toLowerCase() === 'men') {
            Navigate('/men')
        } else if (text.toLowerCase() === 'women') {
            Navigate('/women')
        } else if (text.toLowerCase() === 'kids') {
            Navigate('/kids')
        } else {
            Navigate('/')
        }
    }
    const linktoFeaturedPages = () => {
        if (btnText.toLowerCase() === 'new') {
            Navigate('/new')
        } else {
            Navigate('/new')
        }
    }
    return (
        <div className='flex justify-between items-center max-w-[90%] mx-auto mt-3 py-1 md:py-4 px-2'>
            <div className='text-[30px] md:text-[40px] text-black font-[Josefin Sans] font-light tracking-normal cursor-pointer' onClick={() => linkToHomePage()}>{text}</div>
            <div className='bg-[#E5E5E5] text-black tracking-wide py-[5px] md:py-[8px] px-[10px] md:px-[12px] font-[Josefin Sans] text-[12px] md:text-[15px] rounded-lg cursor-pointer hover:bg-black hover:text-[#E5E5E5] hover:transition-all' onClick={() => linktoFeaturedPages()}>{btnText}</div>
        </div>
    )
}

export default HeadlineContainer