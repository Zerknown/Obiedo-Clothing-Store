import { createContext, useContext, useReducer } from "react";
import { Products } from "../../../components/Products";
import { Product } from "../../../models";
import { setNewPrice, ShopStateActionType } from "../actions";
import { shopReducer } from "../reducer";
import { initialState, ShopState  } from "../state";

const ShopContext = createContext<ShopState>(initialState);

export const ShopProvider = ( children: any) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);
    const products = state.products ?? [];
    
    
    const addNewProduct = (product: any) => {
        const updatedCart = state.products?.concat(product);
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

const useShop = () => {
    const context = useContext(ShopContext);

    if (context === undefined) {
        throw new Error("use")
    }

    return context;
}

