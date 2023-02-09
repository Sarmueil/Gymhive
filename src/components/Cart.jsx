import React from 'react';
import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { useStoreContext } from '../contexts/StoreContext';


const Cart = () => {
    const { totalPrice, totalQuantities, cartItems, setShowCart,handleCartItemQuantity } = useStoreContext();
    console.log(totalQuantities, 'ttttt')
    console.log(cartItems, 'ooooo')

    return (
        <div className='w-[100vw] bg-[rgba(0,0,0,0.4)] fixed right-0 top-0 z-[9999] transition-all ease-in-out duration-700'>
            <div className='h-[100vh] w-[100%] md:w-[600px] bg-white float-right py-[40px] px-[10px] relative'>
                <button className='p-3 flex items-center' onClick={() => setShowCart(false)}>
                    <AiOutlineLeft className='text-[20px] text-[#FCA311]' />
                    <span className='text-[25px] ml-3'>Your Cart</span>
                    <span className='text-[20px] ml-2'>({totalQuantities || 0} items)</span>
                </button>
                {cartItems.length < 1 && (
                    <>
                        <div className='m-[40px] text-center bg-[#14213D] px-[20px] py-[50px] hover:shadow-2xl transition-all ease-in-out duration-75'>
                            <AiOutlineShopping className='text-[150px] mx-auto text-white' />
                            <h3 className='text-[#FCA311] text-[20px]'>Your Snipe bag is empty !</h3>
                        </div>
                        <div className='w-[100%] md:w-[80%] mx-auto py-3 md:py-4 rounded-full cursor-pointer text-[14px] md:text-[16px] bg-black text-white text-center' onClick={() => setShowCart(false)}>Continue Shopping</div>
                    </>
                )}
                <div className='mt-[15px] overflow-auto max-h-[70vh] py-[20px] px-[10px]'>
                    {cartItems.length >= 1 && cartItems.map((item) => (
                        <div className='flex gap-[5px] md:gap-[30px] p-[20px] hover:shadow-xl rounded-xl transition-all ease-in-out duration-700' key={item?._id}>
                            <img src={item.product_images[0]} alt="product__images" className='w-[180px] h-[100px] md:h-[130px] rounded-2xl bg-[#E5E5E5] object-cover' />
                            <div className='w-full'>
                                <div className='flex justify-between text-[#14213D] w-full'>
                                    <h5 className='text-[16px] md:text-[18px]'>{item?.product_name}</h5>
                                    <h4 className='text-[#FCA311] text-[18px] md:text-[20px]'>${item?.price}</h4>
                                </div>
                                <div className='mt-2 md:mt-8 flex items-center'>
                                    <h2 className='text-[16px] md:text-[20px]'>Quantity</h2>
                                    <div className='flex items-center ml-1 md:ml-3 justify-between'>
                                        <AiFillMinusCircle className='text-black text-[25px] cursor-pointer ml-1' onClick={()=> handleCartItemQuantity(item?._id, 'dec')}/>
                                        <h1 className='text-[25px] ml-1'>{item?.quantity}</h1>
                                        <AiFillPlusCircle className='text-black text-[25px] cursor-pointer' onClick={()=> handleCartItemQuantity(item?._id, 'inc')}/>
                                    </div>
                                    <button className='outline-none border-none px-2 py-1 text-[10px] md:text-[16px] text-white bg-red-500 ml-7 md:ml-32'>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className='absolute bottom-[12px] right-[5px] w-full py-[30px] px-[65px]'>
                        <div className='flex justify-between'>
                            <h3 className='text-[18px]'>Subtotal:</h3>
                            <h3>${totalPrice}</h3>
                        </div>
                        <div className='w-[100%] mt-3 mx-auto py-3 md:py-4 rounded-full cursor-pointer text-[14px] md:text-[16px] bg-black text-white text-center' onClick={() => setShowCart(false)}>Checkout</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart;