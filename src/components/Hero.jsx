import React from 'react';
import './homeLayout.css';
import HeroImageA from '../assets/Images/HeroA.svg';
import HeroImageB from '../assets/Images/HeroB.svg';
import HeroImageC from '../assets/Images/HeroC.svg';
import HeroImageD from '../assets/Images/HeroD.svg';

const Hero = () => {

    const heroDisplayData = [
        {
            img: HeroImageA,
            title: 'Snipe it love more',
            text: 'Explore a curated selection of footwaer brands for your own comfort.'
        },
        {
            img: HeroImageB,
            title: 'Go run go steady',
            text: 'Hit the road all day long, your move your way.'
        },
        {
            img: HeroImageC,
            title: 'Form and function',
            text: 'Fit and bold and comfortable footwears,let us encourage your endeavors.'
        },
        {
            img: HeroImageD,
            title: 'The fashion way',
            text: 'Shop our new and exclusive footwear brands to complement your clothing style.'
        }
    ]
    return (
        <div className='max-w-[90%] mx-auto h-[50vh] md:h-[75vh] rounded-lg md:rounded-3xl bg-black mt-4'>
            <div className='overflow-hidden h-[100%] w-full rounded-lg md:rounded-3xl relative'>
                {heroDisplayData.map((item, index) => (
                    <div className='hero_items' key={index}>
                        <img src={item.img} alt='hero_image' />
                        <div className='hero_text'> 
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero