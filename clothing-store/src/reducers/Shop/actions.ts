import { Product } from "../../models";
import { ShopState } from "./state";

export enum ShopStateActionType {
    UpdatePrice = 'UPDATE_PRICE',
    AddProduct = 'ADD_PRODUCT',
    SubtractProduct = 'SUBTRACT_PRODUCT',
    UpdateCart = 'UPDATE_CART',
    addProductToWishlist = 'ADD_PRODUCT_TO_WISHLIST',
    removeFromWishlist = 'removeFromWishlist',
    checkOutCart = "CHECK_OUT_CART",
    updatePriceQuantity = "UPDATE_PRICE_QUANTITY"
};

export type ShopStateAction = {
    type: ShopStateActionType;
    payload?: ShopState;
};

export const setNewPrice = (totalCost: number): ShopStateAction => ({
    type: ShopStateActionType.UpdatePrice,
   // payload: 
})

export const addProduct = (product: Product): ShopStateAction => ({
    type: ShopStateActionType.AddProduct,
    //payload: product,
});

export const subtractProduct = (products: []): ShopStateAction => ({
    type: ShopStateActionType.SubtractProduct,
   
});

export const UpdateCart = (): ShopStateAction => ({
    type: ShopStateActionType.UpdateCart,

})