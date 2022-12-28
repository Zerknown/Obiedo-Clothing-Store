import { Product } from "../../models";

export type ShopState = {
    totalCost?: number,
    products?: any,
    addNewProduct?: any,
    children?: any,
    removeFromCart?: any,
    addProductToWishlist?: any,
    removeFromWishlist?: any,
    wishlist?: any
}

export const initialState = {
    totalCost: 0,
    products: [],
    addNewProduct: () => {},
    children: [],
    subtractNewProduct: () => {},
    addProductToWishlist: () => {},
    removeFromWishlist: () => {},
    wishlist: []
}



// export type ShopState = typeof initialState;