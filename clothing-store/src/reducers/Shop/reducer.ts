import { createContext, useReducer } from "react";
import { Product } from "../../models";
import { ShopStateAction, ShopStateActionType } from "./actions";
import { initialState, ShopState } from "./state";

const ShopContext = createContext(initialState);

export const shopReducer = (
    state: ShopState, 
    action: ShopStateAction): ShopState => {
       
       // const { payload } = action;
       //const totalCostValue = state.totalCost ?? 0;
      // const totalProducts = state.products ?? [];
        switch (action.type){
            
            case ShopStateActionType.UpdatePrice: 
            return {
                ...state,
                totalCost: action.payload?.totalCost
            };

            case ShopStateActionType.AddProduct:
                return {
                    ...state,
                    products: action.payload?.products,
                };
            
            case ShopStateActionType.SetIsInCart:
                return {
                    ...state,
                    isInCart: !state.isInCart,
                };            

            case ShopStateActionType.SubtractProduct:
                return {
                    ...state,
                  products: action.payload?.products,  
                };
                default:
                throw new Error(`No case for type ${ShopStateActionType} found in shopReducer.`);
        }
    };

    