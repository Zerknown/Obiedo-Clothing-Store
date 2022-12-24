import { Product } from "../../models";
import { ShopState } from "./state";

export enum ShopStateActionType {
    SetIsInCart = 'SET_IS_IN_CART',
    UpdatePrice = 'UPDATE_PRICE',
    AddProduct = 'ADD_PRODUCT',
    SubtractProduct = 'SUBTRACT_PRODUCT',
    UpdateCart = 'UPDATE_CART'
};

export type ShopStateAction = {
    type: ShopStateActionType;
    payload?: ShopState;
};

export const setIsAddedColor = (): ShopStateAction => ({
    type: ShopStateActionType.SetIsInCart,
   // payload:  ,
});

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
    payload: {products},
});

export const UpdateCart = (): ShopStateAction => ({
    type: ShopStateActionType.UpdateCart,

})