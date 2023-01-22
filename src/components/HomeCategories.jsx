import React from 'react'
import Men from '../assets/Images/mencat.png';
import Women from '../assets/Images/womencat.png';
import Kids from '../assets/Images/kidscat.png';
import { useNavigate } from 'react-router-dom';

const HomeCategories = () => {
    const Navigate = useNavigate()

    const CatergoryObj = [
        {
            img: Men,
            text: "Men's Footwear",
            route: 'men'
        },
        {
            img: Women,
            text: "Women's Footwear",
            route: 'women'
        },
        {
            img: Kids,
            text: "Kids's Xclusive",
            route: 'kids'
        }

    ]

    const linkTosalesPage = (text) => {
        if (text.toLowerCase() === 'men') {
            Navigate('/men')
        } else if (text.toLowerCase() === 'women') {
            Navigate('/women')
        } else {
            Navigate('/kids')
        }
    }


    return ( 
        <div className='grid grid-cols-1 md:grid-cols-3 space-x-0 md:space-x-4 max-w-[90%] mx-auto my-4 md:my-2'>
            {CatergoryObj.map((item, index) => (
                <div className='cursor-pointer mb-2 md:mb-0' key={index} onClick={() => linkTosalesPage(item?.route)}>
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