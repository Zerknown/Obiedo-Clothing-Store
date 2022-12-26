import { debug } from "console";
import { createContext, useContext, useReducer } from "react";

import { Product } from "../../models";
import { shopReducer } from "../Shop";
import { setNewPrice, ShopStateActionType } from "../Shop/actions";

import { initialState, ShopState  } from "../Shop/state";

const ShopContext = createContext<ShopState>(initialState);

export const ShopProvider: React.FunctionComponent<ShopState> = ({children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);
    const products = state.products ?? [];
    
    
    const addNewProduct = (product: any) => {
        const updatedCart = state.products?.concat(product);
        
        console.log(updatedCart + "Checking Add New Product");
        dispatch({
            type: ShopStateActionType.AddProduct,
            payload: {
                
                products: updatedCart 
            }
        });
    };

    const removeFromCart = (product: Product) => {
        const updatedCart = state.products?.filter(
            (currentProduct: Product) => currentProduct.name !== product.name
        );
        updatePrice(updatedCart);
        
        dispatch({
            type: ShopStateActionType.SubtractProduct,
            payload: {
                products:  updatedCart
            }
        });
    };

    const updatePrice = (products: Product[] = []) => {
        let totalCost = 0;
        products.forEach((product: any) => (totalCost += product.price));
        
        dispatch({
            type: ShopStateActionType.UpdatePrice,
            payload: {
                totalCost
                
            }
        });
    };

    const value = {
        total: state.totalCost,
        products: state.products,
        addNewProduct,
        removeFromCart
    };
    //<Products[]>
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
};


export const useShop = () => {
    const context = useContext(ShopContext);

    if (context === undefined) {
        throw new Error("use");
    }

    return context;
}

