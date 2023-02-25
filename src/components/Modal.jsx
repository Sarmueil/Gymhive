import React, {useState} from 'react'
import Paystackinterface from '../utils/Paystackinterface';
import { useStoreContext } from '../contexts/StoreContext'

const Modal = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const { totalPrice } = useStoreContext();
    return (
        <>
            <div className="fixed inset-0 z-[1000] flex items-center justify-center">
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>
                <div className="relative z-10 bg-white px-6 py-6 md:py-8 rounded-lg shadow-lg w-[90%] md:w-[550px]">
                    <div className='flex items-center justify-between mb-4 py-3'>
                        <h2 className="text-lg md:text-xl font-bold">Confirm and pay</h2>
                        <h2 className='text-[25px] md:text-[30px] font-bold text-[#FCA311]'><span>&#8358;</span>{totalPrice}00</h2>
                    </div>
                    <div className='mt-6 md:mt-8'>
                        <input type="email" className="shadow appearance-none border rounded w-full py-3 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className='mt-6 md:mt-8'>
                        <input type="email" className="shadow appearance-none border rounded w-full py-3 md:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your fullname" onChange={(e)=> setUsername(e.target.value)}/>
                    </div>
                    <div className='mt-6 md:mt-8'>
                        <Paystackinterface email={email} username={username}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;