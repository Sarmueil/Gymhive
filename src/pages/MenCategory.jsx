import React from 'react'
import CategoryHeaderContainer from '../components/CategoryHeaderContainer'
import FeaturedProductsContainer from '../components/FeaturedProductsContainer'
import Header from '../components/Header'
import Headline from '../components/Headline'
import HeadlineContainer from '../components/HeadlineContainer'
import HeroContainer from '../components/HeroContainer'
import SliderContainer from '../components/SliderContainer'
import { products, featuredProducts } from '../data';
import menHero from '../assets/Images/menA.svg';
import MemberXclusive from '../components/MemberXclusive'
import SectionContainer from '../components/SectionContainer'
import Footer from '../components/Footer'

const MenCategory = () => {
    const relatedProducts = products?.filter((item) => item?.isRelatedProduct === true)
    const data = featuredProducts[13];
    const branded = featuredProducts[5]
    const datab = featuredProducts[14];

    return (
        <div className='w-full relative'>
            <Header />
            <CategoryHeaderContainer text='Men' btnText='Explore'/>
            <HeroContainer img={menHero} title='High Top Lebron 2021' text='SNIPE MADE FOR MEN' desc='Exclusively for men. Walk your way to the horizons with lebron high top sneakers'/>
            <HeadlineContainer text='Trending now' btnText='New' />
            <SliderContainer data={relatedProducts} />
            <Headline text='Snipe for sports' />
            <FeaturedProductsContainer data={data} />
            <Headline text='Featured' />
            <HeroContainer img={branded?.image} title='High Top Lebron 2021' text={branded?.name} desc={branded?.description}/>
            <HeadlineContainer text='Hard Drive' btnText='Explore' /> 
            <SliderContainer data={relatedProducts} />
            <MemberXclusive />
            <Headline text='Explore' />
            <FeaturedProductsContainer data={datab} />
            <SectionContainer />
            <Footer />
        </div>
    )
}

export default MenCategory