import React from 'react'
import HeadlineContainer from './HeadlineContainer'
import { products, featuredProducts } from '../data'
import ProductsContainer from './ProductsContainer'
import SliderContainer from './SliderContainer'
import menHero from '../assets/Images/menA.svg'
import HeroContainer from './HeroContainer'
import Headline from './Headline'
import SectionContainer from './SectionContainer'
import Footer from './Footer'

const MenProductPage = () => {
    const newProducts = products.filter((item) => item?.isNewProduct === true)
    const relatedProducts = products?.filter((item) => item?.isRelatedProduct === true)
    const branded = featuredProducts[5]

    return (
        <>
            <HeadlineContainer text='Men' btnText='Filters' />
            <ProductsContainer products={newProducts.slice(0, 8)} />
            <SliderContainer data={relatedProducts} />
            <ProductsContainer products={newProducts.slice(9)} />
            <HeroContainer img={menHero} title='High Top Lebron 2021' text='SNIPE MADE FOR MEN' desc='Exclusively for men. Walk your way to the horizons with lebron high top sneakers' />
            <Headline text='Featured' />
            <HeroContainer img={branded?.image} title='High Top Lebron 2023' text={branded?.name} desc={branded?.description} />
            <HeadlineContainer text='Hard Drive' btnText='Explore' />
            <SliderContainer data={relatedProducts} />
            <SectionContainer />
            <Footer />
        </>
    )
}

export default MenProductPage