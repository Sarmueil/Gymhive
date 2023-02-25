import React from 'react'
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineStar, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { products } from '../data';
import HeadlineContainer from './HeadlineContainer';
import SliderContainer from './SliderContainer';
import Footer from './Footer';
import { useStoreContext } from '../contexts/StoreContext';
import Modal from './Modal';


const ProductMainPage = () => {

    const { quantity, increaseQuantity, decreaseQuantity, onAddProduct,isOpen } = useStoreContext()
    const { id } = useParams()
    const singleProduct = products?.find((item) => item?._id === id)
    const realedProducts = products?.filter((item) => item?.isRelatedProduct === true && item?._id !== id)

    return (
        <>
          {isOpen && <Modal />}
            <div className='max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 my-6'>
                <div className='hidden md:grid grid-cols-2 gap-x-3 gap-y-3'>
                    {singleProduct?.product_images.map((image, index) => (
                        <div key={index} className='w-full hover:shadow-xl cursor-pointer'>
                            <img src={image} alt="shoe_images" className='object-cover w-full h-[100%]' />
                        </div>
                    ))}
                </div>

                {/* mobiles */}
                <>
                    <h1 className='md:hidden inline-block text-[25px]'>{singleProduct?.product_name}</h1>
                    <div className='mt-1 md:hidden flex items-center'>
                        <p className='text-[15px]'><span>&#8358;</span>{singleProduct?.price}</p>
                        <div className='ml-3 flex items-center'>
                            <p className='text-[14px]'>Reviews:</p>
                            <div className='flex items-center'>
                                <AiFillStar className='text-[#FCA311]' />
                                <AiFillStar className='text-[#FCA311]' />
                                <AiFillStar className='text-[#FCA311]' />
                                <AiFillStar className='text-[#FCA311]' />
                                <AiOutlineStar className='text-[#FCA311]' />
                            </div>
                            <p className='text-[12px]'>(20)</p>
                        </div>
                    </div>
                    <div className='md:hidden flex space-x-4 overflow-scroll scrollbar-hide p-3 max-w-[99%] mx-auto my-1 md:my-4'>
                        {singleProduct?.product_images.map((image, index) => (
                            <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out h-[80%] md:h-[100%]' key={index}>
                                <div className="relative h-[75%] md:h-[95%] w-80">
                                    <img src={image} alt="shoe_images" className="object-cover rounded-xl w-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
                {/* mobiles */}



                <div className='py-2 md:py-6 px-2 md:px-8'>
                    <h1 className='hidden md:inline-block text-[40px]'>{singleProduct?.product_name}</h1>
                    <div className='mt-1 ml-2 hidden md:flex items-center border-b-2'>
                        <p className='text-[30px]'><span>&#8358;</span>{singleProduct?.price}</p>
                        <div className='ml-5 flex items-center'>
                            <p className='text-[16px]'>Reviews:</p>
                            <div className='flex items-center'>
                                <AiFillStar className='text-[#FCA311]' />
                                <AiFillStar className='text-[#FCA311]' />
                                <AiFillStar className='text-[#FCA311]' />
                                <AiFillStar className='text-[#FCA311]' />
                                <AiOutlineStar className='text-[#FCA311]' />
                            </div>
                            <p className='text-[16px]'>(20)</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-[14px] md:text-[16px] tracking-wide'>{singleProduct?.product_description}</p>
                    </div>
                    <div className='mt-7'>
                        <h2 className='text-[16px] md:text-[20px] border-b-2 w-[80%] md:w-[48%] pb-1 border-black uppercase'>Description and features</h2>
                        {singleProduct?.product_details?.map((item, index) => (
                            <ul className='mt-3' key={index}>
                                <li className='mt-1 text-[14px] md:text-[16px]'>{item}</li>
                            </ul>
                        ))}
                    </div>
                    <div className='mt-8 flex items-center'>
                        <h2 className='text-[20px]'>Quantity</h2>
                        <div className='flex items-center ml-3 justify-between'>
                            <AiFillMinusCircle className='text-black text-[30px] cursor-pointer ml-1' onClick={() => decreaseQuantity()} />
                            <h1 className='text-[30px] ml-1'>{quantity}</h1>
                            <AiFillPlusCircle className='text-black text-[30px] cursor-pointer' onClick={() => increaseQuantity()} />
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className='w-[100%] md:w-[80%] mx-auto py-3 md:py-4 rounded-full cursor-pointer text-[14px] md:text-[16px] bg-black text-white text-center' onClick={()=> onAddProduct(singleProduct, quantity)}>Add to cart</div>
                        <div className='w-[100%] md:w-[80%] mx-auto py-2 md:py-4 rounded-full cursor-pointer text-[14px] md:text-[16px] bg-transparent text-black border mt-4 border-black text-center'>Wishlist</div>
                    </div>

                    <div className='mt-4 md:mt-8 bg-[#E5E5E5] md:bg-transparent py-1 md:py-0 z-0'>
                        <HeadlineContainer text='Hard Drive' btnText='Explore' />
                        <SliderContainer data={realedProducts} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductMainPage;