import React from 'react'
import { products } from '../data'
import HeadlineContainer from './HeadlineContainer'
import HeroContainer from './HeroContainer'
import ProductsContainer from './ProductsContainer'
import SliderContainer from './SliderContainer'
import KidsHero from '../assets/Images/KidsHeroA.svg'
import SectionContainer from './SectionContainer'
import Footer from './Footer'


const KidsProductPage = () => {
    const newProducts = products.filter((item) => item?.isNewProduct === true)
    const relatedProducts = products?.filter((item) => item?.isRelatedProduct === true)

    return (
        <>
            <HeadlineContainer text='Kids' btnText='Filters' />
            <ProductsContainer products={newProducts.slice(0, 8)} />
            <SliderContainer data={relatedProducts} />
            <ProductsContainer products={newProducts.slice(9)} />
            <HeroContainer img={KidsHero} title='Nike Air Max 97' text='TEEM WALK STYLE' desc='A sneaker for the prettier ones that delivers warm comfort for the feet' />
            <HeadlineContainer text='Hard Drive' btnText='Explore' />
            <SliderContainer data={relatedProducts} />
            <SectionContainer />
            <Footer />
        </>
    )
}

export default KidsProductPage