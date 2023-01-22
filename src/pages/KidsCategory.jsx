import React from 'react'
import CategoryHeaderContainer from '../components/CategoryHeaderContainer'
import Header from '../components/Header'
import HeroContainer from '../components/HeroContainer'
import kidsHero from '../assets/Images/kidsA.svg'
import HeadlineContainer from '../components/HeadlineContainer'
import { products, featuredProducts } from '../data'
import SliderContainer from '../components/SliderContainer'
import Headline from '../components/Headline'
import VideoContainer from '../components/VideoContainer'
import KidsVideo from '../assets/kids.mp4'
import MemberXclusive from '../components/MemberXclusive'
import FeaturedProductsContainer from '../components/FeaturedProductsContainer'
import SectionContainer from '../components/SectionContainer'
import Footer from '../components/Footer'

const KidsCategory = () => {
    const relatedProducts = products?.filter((item) => item?.isRelatedProduct === true)
    const brand = featuredProducts[12];
    return (
        <div className='w-full relative'>
            <Header />
            <CategoryHeaderContainer text='Kids' btnText='Explore' />
            <HeroContainer img={kidsHero} title='Nike Air Max 2023' text='SNIPE FOR YOUNGIES' desc='A sneaker for the future generation that delivers big comfort for small feet.' />
            <HeadlineContainer text='Trending now' btnText='New' />
            <SliderContainer data={relatedProducts} />
            <Headline text="Don't Miss" />
            <VideoContainer video={KidsVideo}/>
            <HeadlineContainer text='Hard Drive' btnText='Explore' /> 
            <SliderContainer data={relatedProducts} />
            <MemberXclusive />
            <Headline text="Just in" />
            <FeaturedProductsContainer data={brand}/>
            <SectionContainer />
            <Footer />
        </div>
    )
}

export default KidsCategory