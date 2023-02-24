import React from 'react';
import MainImgA from '../assets/Images/Brandpic.svg';
import MainImgB from '../assets/Images/memberBG.svg';
import './homeLayout.css';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../contexts/StoreContext';

const ParrallaxScroll = () => {
    const Navigate = useNavigate();
    const { setShowCart } = useStoreContext();

    const linktoPages = (item) => {
        if (item.toLowerCase() === 'explore') {
            Navigate('/new')
        } else {
            setShowCart(true)
        }
        return
    }

    return (
        <div className='mt-[35px] p-0 bg-transparent max-w-[90%] mx-auto'>
            <div className='w-full h-[60vh] md:h-[80vh] relative'>
                <img src={MainImgA} alt="shoe_image" className='w-full h-[100%] object-cover bg-no-repeat relative' />
                <div className='absolute text-[#E5E5E5] top-0 left-0 w-full h-[60vh] md:h-[80vh] bg-[rgba(0,0,0,0.4)]'>
                    <h1 className='text-[50px] md:text-[55px] font-[Josefin Sans] tracking-normal md:tracking-wide mt-[30%] md:mt-[30%] ml-[2%]'>Snipe It Your Way</h1>
                    <p className='text-[19px]font-[Josefin Sans] tracking-normal ml-[2%]'>Our latest brand of shoes for everyday runs, training ,racing and fashion refreshed in a new vibrant color way.</p>
                    <div className='flex mt-[20px] ml-[2%]'>
                        {['Explore', 'Shop'].map((menu, index) => (
                            <div className='bg-[#E5E5E5] text-black p-[7px] rounded-lg cursor-pointer font-[Josefin Sans] text-[18px] tracking-normal mr-[15px] hover:bg-black hover:text-white transition-all' key={index} onClick={() => linktoPages(menu)}>{menu}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='brand_bg'></div>
            <div className='mt-7 md:mt-0 w-full h-[50vh] md:h-[80vh] relative'>
                <img src={MainImgB} alt="membership" className='w-full h-[100%] object-cover bg-no-repeat relative' />
                <div className='absolute text-[#E5E5E5] top-[20%] md:top-[40%] md:right-[2%] pl-1'>
                    <h2 className='text-[28px] md:text-[50px] font-[Josefin Sans] tracking-wide'>MEMBERS XCLUSIVE TREND.</h2>
                    <p className='text-[20px] md:text-[28px] font-[Josefin Sans] tracking-wide'>Shop now save more and spend less.</p>
                    <div className='flex mt-[20px] ml-[2%]'>
                            <div className='bg-[#E5E5E5] text-black p-[5px] md:p-[7px] rounded-lg cursor-pointer font-[Josefin Sans] text-[18px] md:text-[20px] tracking-normal mr-[15px] hover:bg-[rgba(0,0,0,0.6)] hover:text-white transition-all' onClick={() => Navigate(`/new`)}>Explore</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParrallaxScroll