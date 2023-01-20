import React from 'react'

const ProductCard = ({ img, name,price }) => {
    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out h-[80%] md:h-[100%]'>
            <div className="relative h-[75%] md:h-[95%] w-80">
                <img src={img} alt="workspace_images" className="object-cover rounded-xl w-full" />
            </div>
            <div className='flex items-center justify-between px-2'>
                <h3 className="font-[Josefin Sans] text-[16px] text-black font-medium mt-2">{name}</h3>
                <h3 className="font-[Josefin Sans] text-[18px] text-black font-medium mt-2">${price}</h3>
            </div>
        </div>
    )
}

export default ProductCard