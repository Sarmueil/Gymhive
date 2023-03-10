import React from 'react'
import { useNavigate } from 'react-router-dom';
import ImgA from '../assets/Images/gymE.jpg';
import ImgB from '../assets/Images/gymF.jpg';
import ImgC from '../assets/Images/gymG.jpg';
import ImgD from '../assets/Images/gymH.jpg';
import '../components/homeLayout.css';


const GymhiveHomepage = () => {

    const heroDisplayData = [
        {
            img: ImgB,
            title: 'Snipe it love more',
            text: 'Explore a curated selection of footwaer brands for your own comfort.',
        },
        {
            img: ImgA,
            title: 'Go run go steady',
            text: 'Hit the road all day long, your move your way.',
        },
        {
            img: ImgC,
            title: 'Form and function',
            text: 'Fit and bold and comfortable footwears,let us encourage your endeavors.',
        },
        {
            img: ImgD,
            title: 'Form and function',
            text: 'Fit and bold and comfortable footwears,let us encourage your endeavors.',
        }
    ]

    const Navigate = useNavigate();

    return (
        <>
            {/* // Header */}
            <div className='w-[100vw] fixed z-[1000] top-0'>
                <div className='bg-transparent flex justify-between items-center py-[10px] px-[20px] md:px-[30px]'>
                    <div className='font-extrabold text-white text-[25px] md:text-[40px]'>Gymhive.</div>
                    <div className='flex items-center'>
                        {['Snipe', 'Explore Exercises'].map((menu, index) => (
                            <div className={`mr-[2px] md:mr-[13px] p-[6px] cursor-pointer text-[14px] md:text-[16px] rounded-lg font-[Josefin Sans] text-white hover:bg-white hover:text-black`} key={index} onClick={() => menu === "Snipe" && Navigate(`/`)}>{menu}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* // hero */}
            <section className='bg-black h-screen'>
                <div className='overflow-hidden h-[100%] w-full relative'>
                    {heroDisplayData.map((item, index) => (
                        <div className='hero_items' key={index}>
                            <img src={item.img} className="w-full object-cover" alt='workout__images' />
                            <div className='hero_text_gymhive'>
                                <h5>Form and function</h5>
                                <p>Transform Your Body with Our Ultimate Gym Workout Platform! Check out latest excericises for your daily routines</p>
                                <button className='mt-4 border-none outline-none py-3 px-4 bg-black text-white rounded-lg text-[12px] md:text-[16px]'>
                                    Get started
                                </button>
                            </div>
                        </div>
                    ))}
                </div> 
            </section> 
        </>
    )
} 

export default GymhiveHomepage