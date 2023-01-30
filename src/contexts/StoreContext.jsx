import React, { useState, createContext, useContext } from "react";
// import { toast } from 'react-hot-toast';

const initialState = {
    showCart: false,
    cartItems: [],
    totalPrice: "",
    totalQuantities: "",
    quantity: 1,
}

const StoreContext = createContext(initialState);

export const useStoreContext = () => useContext(StoreContext);

export const StoreContextProvider = StoreContext.Provider;

export const StoreContextProviderContainer = ({ children }) => {
    
    const [showCart, setShowCart] = useState(initialState.showCart)
    const [quantity, setQuantity] = useState(initialState.quantity)
    const [totalPrice, setTotalPrice] = useState(initialState.totalPrice)
    const [cartItems, setCartItems] = useState(initialState.cartItems)
    const [totalQuantities, setTotalQuantities] = useState(initialState.totalQuantities)

    console.log(cartItems,'items for enny')

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1)
    }
    const decreaseQuantity = () => {
        setQuantity((prev) => {
            if (prev - 1 < 1) return 1;
            return prev - 1
        })
    }

    const onAddProduct = (product, quantity) => {
      const checkProductInCart = cartItems.find((item)=> item._id === product._id)

      setTotalPrice((prev)=> prev + product.price * quantity)
      setTotalQuantities((prev)=> prev + quantity)

      if(checkProductInCart){
        const updatedCartItems = cartItems.map((cartProduct)=> {
            if(cartProduct?._id === product?._id) return {
                ...cartProduct, quantity:cartProduct.countInStock + quantity
            }
        })
        setCartItems(updatedCartItems)
      }else {
        product.countInStock = quantity
        setCartItems([...cartItems, {...product}])
      }
    //   toast.success(`${product?.product_name} added to cart`)
    }

    return (
        <StoreContextProvider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                quantity,
                increaseQuantity,
                decreaseQuantity,
                onAddProduct
            }}
        >
            {children}
        </StoreContextProvider>
    )

}