import React from 'react'
import Men from '../assets/Images/mencat.png';
import Women from '../assets/Images/womencat.png';
import Kids from '../assets/Images/kidscat.png';

const HomeCategories = () => {

    const CatergoryObj = [
        {
            img: Men,
            text: "Men's Footwear"
        },
        {
            img: Women,
            text: "Women's Footwear"
        },
        {
            img: Kids,
            text: "Kids's Xclusive"
        }

    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 space-x-0 md:space-x-4 max-w-[90%] mx-auto my-4 md:my-2'>
            {CatergoryObj.map((item, index) => (
                <div className='cursor-pointer mb-2 md:mb-0' key={index}>
                    <div className='relative h-[25rem] md:h-[35rem] bg-[#E5E5E5] hover:bg-[#FCA311] mb-2'>
                        <img src={item.img} alt="rentimage" className='object-contain h-[100%] w-[100%]' />
                    </div>
                    <h2 className='text-[22px] tracking-normal ml-2'>{item.text}</h2>
                </div>
            ))}
        </div> 
    )
}

export default HomeCategories