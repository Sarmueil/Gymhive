import React from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryHeaderContainer = ({ text, btnText }) => {
    const Navigate = useNavigate();

    const linkTosalesPage = () => {
        if (text.toLowerCase() === 'men') {
            Navigate('/men/products')
        } else if (text.toLowerCase() === 'women') {
            Navigate('/women/products')
        } else {
            Navigate('/kids/products')
        }
    }

    return (
        <div className='flex justify-between items-center max-w-[90%] mx-auto mt-3 py-1 md:py-4 px-2'>
            <div className='text-[30px] md:text-[40px] text-black font-[Josefin Sans] font-light tracking-normal cursor-pointer'>{text}</div>
            <div className='flex items-center space-x-2 md:space-x-3'>
                <div className='text-[10px] md:text-[18px] text-black font-[Josefin Sans] font-light tracking-normal cursor-pointer' onClick={() => Navigate(`/new`)}>New Releases</div>
                <div className='text-[10px] md:text-[18px] text-black font-[Josefin Sans] font-light tracking-normal cursor-pointer' onClick={() => linkTosalesPage()}>Sales</div>
                <div className='text-[10px] md:text-[18px] text-black font-[Josefin Sans] font-light tracking-normal cursor-pointer'>Members Xclusive</div>
            </div>
            <div className='bg-[#E5E5E5] text-black tracking-wide py-[5px] md:py-[8px] px-[10px] md:px-[12px] font-[Josefin Sans] text-[12px] md:text-[15px] rounded-lg cursor-pointer hover:bg-black hover:text-[#E5E5E5] hover:transition-all'>{btnText}</div>
        </div>
    )
}

export default CategoryHeaderContainer