import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../contexts/StoreContext';


const SectionContainer = () => {
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
        <div className='bg-black text-center text-white mt-[4%] py-[50px] md:py-[100px] p-0'>
            <div className='text-[45px] md:text-[60px] font-bold font-[Josefin Sans] tracking-wide'>SNIPE AHEAD</div>
            <div className='text-[18px] font-[Josefin Sans] tracking-normal'>A rich experience, exlporing our diverse footwear brands.</div>
            <div className='flex justify-center mt-[30px]'>
                {['Explore', 'Shop'].map((menu, index) => (
                    <div className='bg-[#FCA311] text-white p-[10px] md:p-[7px] rounded-lg cursor-pointer font-[Josefin Sans] text-[18px] md:text-[20px] tracking-normal mr-[15px] hover:bg-black hover:text-white transition-all' key={index} onClick={() => linktoPages(menu)}>{menu}</div>
                ))}
            </div>
        </div>
    )
}

export default SectionContainer