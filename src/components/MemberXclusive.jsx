import React from 'react';
import MainImgB from '../assets/Images/memberBG.svg';

const MemberXclusive = () => {
    return (
        <div className='mt-7 w-full h-[50vh] md:h-[80vh] relative'>
            <img src={MainImgB} alt="membership" className='w-full h-[100%] object-cover bg-no-repeat relative' />
            <div className='absolute text-[#E5E5E5] top-[20%] md:top-[40%] md:right-[2%] pl-1'>
                <h2 className='text-[28px] md:text-[50px] font-[Josefin Sans] tracking-wide'>MEMBERS XCLUSIVE TREND.</h2>
                <p className='text-[20px] md:text-[28px] font-[Josefin Sans] tracking-wide'>Join Now Join Free</p>
                <div className='flex mt-[20px] ml-[2%]'>
                    {['Sign in', 'Join'].map((menu, index) => (
                        <div className='bg-[#E5E5E5] text-black p-[5px] md:p-[7px] rounded-lg cursor-pointer font-[Josefin Sans] text-[18px] md:text-[20px] tracking-normal mr-[15px] hover:bg-[rgba(0,0,0,0.6)] hover:text-white transition-all' key={index}>{menu}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MemberXclusive