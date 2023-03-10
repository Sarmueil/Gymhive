import React from 'react';
import { products, featuredProducts } from '../data';
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
import { useStoreContext } from '../contexts/StoreContext';
import SuccessModal from '../components/SuccessModal';

const Homepage = () => {
    const trendingProducts = products?.filter((item) => item?.isNewProduct === true)
    const realedProducts = products?.filter((item) => item?.isRelatedProduct === true)
    const data = featuredProducts[0];

    const { isPaidSuccessful } = useStoreContext();

    return (
        <>
        {isPaidSuccessful && <SuccessModal />}
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
                <FeaturedProductsContainer data={data} />
                <SectionContainer />
                <Footer />
            </div>
        </>
    )
}

export default Homepage