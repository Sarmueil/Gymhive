import React, { useState, createContext, useContext } from "react";
import { toast } from 'react-hot-toast';

const initialState = {
    showCart: false,
    cartItems: [],
    totalPrice: 0,
    totalQuantities: 0,
    quantity: 1,
    showModal:false
}

const StoreContext = createContext(initialState);

export const useStoreContext = () => useContext(StoreContext);

export const StoreContextProvider = StoreContext.Provider;

export const StoreContextProviderContainer = ({ children }) => {

    const [showCart, setShowCart] = useState(initialState.showCart)
    const [quantity, setQuantity] = useState(initialState.quantity)
    const [totalPrice, setTotalPrice] = useState(initialState.totalPrice)
    const [cartItems, setCartItems] = useState(initialState.cartItems)
    const [totalQuantities, setTotalQuantities] = useState(initialState.totalQuantities); 
    const [isOpen, setIsOpen] = useState(initialState.showModal);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

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
        const checkProductInCart = cartItems.find((item) => item._id === product._id)
        setTotalPrice((prev) => prev + product.price * quantity)
        setTotalQuantities((prev) => prev + quantity)

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct?._id === product?._id) return {
                    ...cartProduct, quantity: cartProduct?.quantity + quantity
                }
            })
            setCartItems(updatedCartItems)
        } else {
            product.quantity = quantity
            setCartItems([...cartItems, { ...product }])
        }
          toast.success(`${product?.product_name} added to cart`)
    }


    let seenProducts; 
    let index;

    const handleCartItemQuantity = (id, val) => {
        seenProducts = cartItems.find((item) => item?._id === id)
        index = cartItems.findIndex((item) => item?._id === id)
        const newCartItems = cartItems.filter((item) => item._id !== id)

        if (val === 'inc') { 
            setCartItems([...newCartItems, { ...seenProducts, quantity: seenProducts.quantity + 1 } ]);
            setTotalPrice((prev) => prev + Number(seenProducts?.price))
            setTotalQuantities((prev) => prev + 1)
        } else if (val === 'dec') {
            if (seenProducts.quantity > 1) {
                setCartItems([...newCartItems, { ...seenProducts, quantity: seenProducts?.quantity - 1 }])
                setTotalPrice((prev) => prev - Number(seenProducts?.price))
                setTotalQuantities((prev) => prev - 1)
            }
        }
    }

    const onRemoveProduct = (product) => {
        seenProducts = cartItems.find((item) => item?._id === product?._id)
        const newCartItems = cartItems.filter((item) => item._id !== product?._id)
        setTotalPrice((prev) => prev - Number(seenProducts?.price) - seenProducts?.quantity)
        setTotalQuantities((prev) => prev - seenProducts?.quantity)
        setCartItems(newCartItems)
    }

    return (
        <StoreContextProvider
            value={{
                showCart,
                setShowCart,
                cartItems,
                totalPrice,
                totalQuantities,
                quantity,
                increaseQuantity,
                decreaseQuantity,
                onAddProduct,
                handleCartItemQuantity,
                onRemoveProduct,
                openModal,
                closeModal,
                isOpen
            }}
        >
            {children}
        </StoreContextProvider>
    )

}