import React from 'react';
import { newproducts, WomenXclusive } from '../data';
import Header from '../components/Header';
import HeadlineContainer from '../components/HeadlineContainer';
import Hero from '../components/Hero';
import HomeCategories from '../components/HomeCategories';
import ParrallaxScroll from '../components/ParrallaxScroll';
import SliderContainer from '../components/SliderContainer';
import Headline from '../components/Headline';
import FeaturedProductsContainer from '../components/FeaturedProductsContainer';
import SectionContainer from '../components/SectionContainer';
import Footer from '../components/Footer';



const Homepage = () => {
    return (
        <div className='w-full relative'>
            <Header />
            <Hero />
            <HeadlineContainer text='Trending now' btnText='New' />
            <SliderContainer data={newproducts} />
            <ParrallaxScroll />
            <HeadlineContainer text='Snipe More' btnText='Explore' />
            <HomeCategories />
            <HeadlineContainer text='Hard Drive' btnText='Explore' /> 
            <SliderContainer data={WomenXclusive} />
            <Headline text='Featured' />
            <FeaturedProductsContainer />
            <SectionContainer />
            <Footer />
        </div>
    )
}

export default Homepage