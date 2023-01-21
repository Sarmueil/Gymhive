import React from 'react';
import { useNavigate } from "react-router-dom";
import { shortWords } from '../utils/shortenWord';


const ProductsContainer = ({ products }) => {
    const Navigate = useNavigate()
    return (
        <div className='max-w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4'>
            {products?.map((product, i) => (
                <div key={i} className="h-[250px] md:h-[430px] cursor-pointer hover:scale-105 transform transition duration-300 ease-out" onClick={()=> Navigate(`/product/${product?._id}`)}>
                    <img src={product.product_images[0]} alt='shoe_image' className='object-cover h-[90%] w-full' />
                    <div className='flex items-center justify-between px-2'>
                        <h3 className="font-[Josefin Sans] text-[10px] md:text-[16px] text-black font-medium mt-1 md:mt-2">{shortWords(product?.product_name, 20)}</h3>
                        <h3 className="font-[Josefin Sans] text-[16px] md:text-[18px] text-black font-medium mt-1 md:mt-2">${product.price}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsContainer