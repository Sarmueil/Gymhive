import React from 'react';
import LogoA from '../assets/Images/Icon_logo.svg';
import LogoB from '../assets/Images/logo_black.svg';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({ setShowSidebar }) => {
    const Navigate = useNavigate();
    return (
        <div className='w-[100vw] bg-[rgba(0,0,0,0.4)] fixed right-0 top-0 z-[9999] transition-all ease-in-out duration-700'>
            <div className='h-[100vh] w-[70%] bg-white float-right py-[30px] px-[12px] relative'>
                <div className='flex justify-between w-full'>
                    <img src={LogoB} alt="logo" className='object-contain h-[40px] w-[60px]' onClick={() => Navigate(`/`)} />
                    <AiOutlineClose className='text-red-500 text-[30px]' onClick={() => setShowSidebar(false)} />
                </div>
                <div className='mt-2 ml-2'>
                    {['New', 'Men', 'Women', 'Kids'].map((menu, index) => (
                        <div className='text-[20px] mt-4 font-bold py-3 px-4 shadow-lg hover:shadow-xl rounded-xl transition-all ease-in-out duration-700 w-full' key={index} onClick={() => Navigate(`/${menu.toLowerCase()}`)}>{menu === 'New' ? 'New Releases' : menu}</div>
                    ))}
                </div>
                <div className='mt-9 ml-4'>
                    <div className='flex items-center'>
                        <img src={LogoA} alt="logo" className='object-contain h-[50px] w-[60px] cursor-pointer' onClick={() => Navigate(`/`)} />
                        <div className='text-[20px] font-bold ml-3'>Join Gymhive.</div>
                    </div>
                    <div className='flex gap-2 mt-2 ml-4'>
                        <button className='border-none outline-none py-2 px-4 bg-black text-white text-[12px] rounded-lg'>Join</button>
                        <button className='border outline-none py-2 px-4 text-black bg-white text-[12px] rounded-lg'>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar