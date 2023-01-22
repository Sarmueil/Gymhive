import React from 'react'
import HeadlineContainer from './HeadlineContainer'
import ProductsContainer from './ProductsContainer'
import { products, featuredProducts } from '../data'
import SliderContainer from './SliderContainer'
import HeroContainer from './HeroContainer'
import womenHero from '../assets/Images/womenHeroA.svg'
import Headline from './Headline'
import SectionContainer from './SectionContainer'
import Footer from './Footer'

const WomenProductPage = () => {
    const newProducts = products.filter((item) => item?.isNewProduct === true)
    const relatedProducts = products?.filter((item) => item?.isRelatedProduct === true)
    const branded = featuredProducts[5]
    return (
        <>
            <HeadlineContainer text='Women' btnText='Filters' />
            <ProductsContainer products={newProducts.slice(0, 8)} />
            <SliderContainer data={relatedProducts} />
            <ProductsContainer products={newProducts.slice(9)} />
            <HeroContainer img={womenHero} title='Nike Snipe Air 2021' text='SNIPE IN GRAND STYLE' desc='A sneaker for the prettier ones that delivers warm comfort for the feet' />
            <Headline text='Featured' />
            <HeroContainer img={branded?.image} title='High Top Lebron 2023' text={branded?.name} desc={branded?.description} />
            <HeadlineContainer text='Hard Drive' btnText='Explore' />
            <SliderContainer data={relatedProducts} />
            <SectionContainer />
            <Footer />
        </>
    )
}

export default WomenProductPage