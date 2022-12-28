import { Product } from "../../models";

export type ShopState = {
    totalCost?: number,
    products?: any,
    addNewProduct?: any,
    children?: any,
    removeFromCart?: any,
    addProductToWishlist?: any,
    removeFromWishlist?: any,
    wishlist?: any,
    checkOutCart?: any,
    checkOutList?: any,
    updatePrice?: any
}

export const initialState = {
    totalCost: 0,
    products: [],
    addNewProduct: () => {},
    children: [],
    subtractNewProduct: () => {},
    addProductToWishlist: () => {},
    removeFromWishlist: () => {},
    wishlist: [],
    checkOutCart: () => {},
    checkOutList: [],
    updatePriceQuantity: () => {}
}



// export type ShopState = typeof initialState;