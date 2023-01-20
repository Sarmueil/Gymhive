import React from 'react'
import { productPageImages, WomenXclusive } from '../data';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// AiOutlineMinus, AiOutlinePlus,
import HeadlineContainer from './HeadlineContainer';
import SliderContainer from './SliderContainer';
import Footer from './Footer';


const ProductMainPage = () => {
    return (
        <>
            <div className='max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 my-6'>
                <div className='hidden md:grid grid-cols-2 gap-x-3 gap-y-3'>
                    {productPageImages.map((image, index) => (
                        <div key={index} className='w-full hover:shadow-xl cursor-pointer'>
                            <img src={image} alt="shoe_images" className='object-cover w-full h-[100%]' />
                        </div>
                    ))}
                </div>

                {/* mobiles */}
                <>
                    <h1 className='md:hidden inline-block text-[25px]'>Here is the product Title</h1>
                    <div className='mt-1 md:hidden flex items-center'>
                        <p className='text-[15px]'>$400</p>
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
                        {productPageImages?.map((image, index) => (
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
                    <h1 className='hidden md:inline-block text-[40px]'>Here is the product Title</h1>
                    <div className='mt-1 ml-2 hidden md:flex items-center border-b-2'>
                        <p className='text-[30px]'>$400</p>
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
                        <p className='text-[14px] md:text-[16px] tracking-wide'>Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll always be on point.</p>
                    </div>
                    <div className='mt-7'>
                        <h2 className='text-[16px] md:text-[20px] border-b-2 w-[80%] md:w-[48%] pb-1 border-black uppercase'>Description and features</h2>
                        <ul className='mt-3'>
                            <li className='mt-1 text-[14px] md:text-[16px]'>Encapsulated Air-Sole unit provides lightweight cushioning.</li>
                            <li className='mt-1 text-[14px] md:text-[16px]'>Genuine leather in the upper offers durability and a premium look.</li>
                            <li className='mt-1 text-[14px] md:text-[16px]'>Solid rubber outsole enhances traction on a variety of surfaces.</li>
                            <li className='mt-1 text-[14px] md:text-[16px]'>Shown: Black/White/Fire Red</li>
                            <li className='mt-1 text-[14px] md:text-[16px]'>Style: 553558-063</li>
                        </ul>
                    </div>
                    <div className='mt-8'>
                        <div className='w-[100%] md:w-[80%] mx-auto py-3 md:py-4 rounded-full cursor-pointer text-[14px] md:text-[16px] bg-black text-white text-center'>Add to cart</div>
                        <div className='w-[100%] md:w-[80%] mx-auto py-2 md:py-4 rounded-full cursor-pointer text-[14px] md:text-[16px] bg-transparent text-black border mt-4 border-black text-center'>Wishlist</div>
                    </div>

                    <div className='mt-4 md:mt-8 bg-[#E5E5E5] md:bg-transparent py-1 md:py-0'>
                        <HeadlineContainer text='Hard Drive' btnText='Explore' />
                        <SliderContainer data={WomenXclusive} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductMainPage;