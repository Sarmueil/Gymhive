import React, { useState } from 'react'
import { useStoreContext } from '../contexts/StoreContext';

const SuccessModal = () => {

    const { cartItems, setIsPaodSuccessful } = useStoreContext();
    const [showOrderSummary, setShowOrderSummary] = useState(false);

    const handleCloseModal = () => {
        setIsPaodSuccessful(false)
        window.location.reload()
        return 
    }

    return (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center">
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>
            <div className="relative z-10 bg-white px-6 py-8 rounded-lg shadow-lg w-[90%] md:w-[550px]">
                <div className='w-full text-center py-5'>
                    <img src={cartItems[0].product_images[0]} alt="shoe" className='mx-auto w-28 md:w-32 h-28 md:h-32 animate-bounce  shadow-2xl focus:animate-pulse transform rounded-full rotate-45 focus:rotate-90' />
                    <h1 className='text-[20px] md:text-[30px] font-bold text-[#14213D] mt-3'>Your payment is successful</h1>
                    <p className='text-[14px] md:text-[16px] font-light text-black mt-1'>Check your email for your transaction reciept</p>
                </div>
                <div className='flex items-center justify-around mt-3'>
                    <button className='outline-none border-none bg-white text-[#4213D] shadow-lg text-[14px] py-2 px-4 rounded-lg hover:bg-[#14213D] hover:text-white' onClick={() => setShowOrderSummary(!showOrderSummary)}>{showOrderSummary ? 'Close Order Summary' : 'Check your order summary'}</button>
                    {!showOrderSummary && <button className='outline-none border-none bg-[#14213D] text-white text-[14px] py-2 px-4 rounded-lg' onClick={() => handleCloseModal()}>Thank you!</button>}
                </div>
                {showOrderSummary && (
                    <div className='mt-6 bg-white border max-h-[40vh] overflow-scroll w-full rounded-lg transition-all ease-in-out duration-700'>
                        {cartItems.map((item) => (
                            <div className='flex gap-[5px] md:gap-[30px] p-3 mb-2 hover:shadow-xl transition-all ease-in-out duration-700 bg-[#E5E5E5]' key={item?._id}>
                                <img src={item.product_images[0]} alt="product__images" className='w-[100px] h-[80px] md:h-[100px] rounded-2xl bg-[#E5E5E5] object-cover' />
                                <div className='mt-2 flex'>
                                    <div className='mt-1'>
                                        <div className='text-[16px] md:text-[20px] font-semibold text-[#14213D]'>{item?.product_name}</div>
                                        <div className='mt-1 md:mt-2 text-[14px] md:text-[16px]'>Quantity: {item?.quantity} </div>
                                    </div>
                                    <div className='mt-1 ml-[2rem] md:ml-[4rem] text-[18px] md:text-[20px] text-[#FCA311] font-bold'><span>&#8358;</span>{item?.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SuccessModal