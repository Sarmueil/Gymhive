import React from 'react'
import HeadlineContainer from './HeadlineContainer'
import ProductsContainer from './ProductsContainer'
import { products,featuredProducts } from '../data'
import SliderContainer from './SliderContainer'
import Headline from './Headline'
import FeaturedProductsContainer from './FeaturedProductsContainer'
import SectionContainer from './SectionContainer'
import Footer from './Footer'

const NewProductPage = () => {
    const newProducts = products.filter((item)=> item?.isNewProduct === true)
    const relatedProducts = products?.filter((item)=> item?.isRelatedProduct === true)
    const featured = featuredProducts[1];
    const featuredA = featuredProducts[2];

    return (
        <>
            <HeadlineContainer text='New Snipes' btnText='Filters' />
            <ProductsContainer products={newProducts.slice(0,8)}/>
            <SliderContainer data={relatedProducts}/>
            <ProductsContainer products={newProducts.slice(9)}/>
            <Headline text="Don't Miss"/>
            <FeaturedProductsContainer data={featured}/>
            <HeadlineContainer text='Hard Drive' btnText='Explore' /> 
            <SliderContainer data={relatedProducts} />
            <Headline text="Just In"/>
            <FeaturedProductsContainer data={featuredA}/>
            <SectionContainer />
            <Footer />
        </>
    )
}

export default NewProductPage