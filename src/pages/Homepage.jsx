import React from 'react';
import { products } from '../data';
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
    const trendingProducts = products?.filter((item)=> item?.isNewProduct === true)
    const realedProducts = products?.filter((item)=> item?.isRelatedProduct === true)

    return (
        <div className='w-full relative'>
            <Header />
            <Hero />
            <HeadlineContainer text='Trending now' btnText='New' />
            <SliderContainer data={trendingProducts} />
            <ParrallaxScroll />
            <HeadlineContainer text='Snipe More' btnText='Explore' />
            <HomeCategories />
            <HeadlineContainer text='Hard Drive' btnText='Explore' /> 
            <SliderContainer data={realedProducts} />
            <Headline text='Featured' />
            <FeaturedProductsContainer />
            <SectionContainer />
            <Footer />
        </div>
    )
}

export default Homepage