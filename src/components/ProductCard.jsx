import React from 'react';
import { useNavigate } from "react-router-dom";
import { shortWords } from '../utils/shortenWord';


const ProductCard = ({ img, name, price, id }) => {
    const Navigate = useNavigate()
    return (
            <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out h-[80%] md:h-[100%]' onClick={()=> Navigate(`/product/${id}`)}>
                <div className="relative h-[75%] md:h-[95%] w-80">
                    <img src={img} alt="workspace_images" className="object-cover rounded-xl w-full" />
                </div>
                <div className='flex items-center justify-between px-2'>
                    <h3 className="font-[Josefin Sans] text-[16px] text-black font-medium mt-2">{shortWords(name, 20)}</h3> 
                    <h3 className="font-[Josefin Sans] text-[18px] text-black font-medium mt-2"><span>&#8358;</span>{price}</h3>
                </div>
            </div> 
    )
}

export default ProductCard