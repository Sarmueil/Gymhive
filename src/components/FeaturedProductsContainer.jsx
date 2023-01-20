import React from 'react'
import { featuredProducts } from '../data';


const FeaturedProductsContainer = () => {
    const data = featuredProducts[0];

    return (
        <div className='mt-[10px] p-0 bg-transparent max-w-[90%] mx-auto my-3'>
            <div className='w-full h-[60vh] md:h-[80vh] relative'>
                <img src={data.image} alt="shoe_image" className='w-full h-[100%] object-cover bg-no-repeat relative' />
                <div className='absolute text-[#E5E5E5] top-0 left-0 w-full h-[60vh] md:h-[80vh] bg-[rgba(0,0,0,0.4)]'>
                    <h1 className='text-[40px] md:text-[40px] font-[Josefin Sans] tracking-normal md:tracking-wide mt-[30%] md:mt-[30%] ml-[2%]'>{data.description}</h1>
                    <div className='flex mt-[20px] ml-[2%]'>
                        {['Preoder', 'Shop'].map((menu, index) => (
                            <div className='bg-[#E5E5E5] text-black p-[7px] md:p-[9px] rounded-lg cursor-pointer font-[Josefin Sans] text-[18px] tracking-normal mr-[15px] hover:bg-black hover:text-white transition-all' key={index}>{menu}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProductsContainer