import React from 'react';
import ProductCard from './ProductCard';


const SliderContainer = ({ data }) => {
    return ( 
        <div className='flex space-x-4 overflow-scroll scrollbar-hide p-3 max-w-[90%] mx-auto my-1 md:my-4'>
            {data?.map((product) => (
                <ProductCard img={product.product_images[0]} name={product.product_name} price={product.price} key={product._id} id={product._id} />
            ))}
        </div>
    )
}

export default SliderContainer 