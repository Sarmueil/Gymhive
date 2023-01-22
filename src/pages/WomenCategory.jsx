import React from 'react'
import CategoryHeaderContainer from '../components/CategoryHeaderContainer'
import Header from '../components/Header'
import HeroContainer from '../components/HeroContainer'
import womenHero from '../assets/Images/womenA.svg'
import HeadlineContainer from '../components/HeadlineContainer'
import { products, featuredProducts } from '../data';
import SliderContainer from '../components/SliderContainer'
import Headline from '../components/Headline'
import FeaturedProductsContainer from '../components/FeaturedProductsContainer'
import MemberXclusive from '../components/MemberXclusive'
import SectionContainer from '../components/SectionContainer'
import Footer from '../components/Footer'

const WomenCategory = () => {
    const relatedProducts = products?.filter((item) => item?.isRelatedProduct === true)
    const data = featuredProducts[1];
    const datab = featuredProducts[2];

    return (
        <div className='w-full relative'>
            <Header />
            <CategoryHeaderContainer text='Women' btnText='Explore' />
            <HeroContainer img={womenHero} title='Nike Snipe Air 2021' text='SNIPE IN GRAND STYLE' desc='A sneaker for the prettier ones that delivers warm comfort for the feet'/>
            <HeadlineContainer text='Trending now' btnText='New' />
            <SliderContainer data={relatedProducts} />
            <Headline text="Don't Miss" />
            <FeaturedProductsContainer data={data}/>
            <HeadlineContainer text='Hard Drive' btnText='Explore' /> 
            <SliderContainer data={relatedProducts} />
            <FeaturedProductsContainer data={datab}/> 
            <MemberXclusive />
            <SectionContainer />
            <Footer />
        </div>
    )
}

export default WomenCategory