import { debug } from "console";
import { createContext, useContext, useReducer } from "react";
import { Wishlist } from "../../components/Wishlist";

import { Product } from "../../models";
import { shopReducer } from "../Shop";
import { setNewPrice, ShopStateActionType } from "../Shop/actions";

import { initialState, ShopState  } from "../Shop/state";

const ShopContext = createContext<ShopState>(initialState);

export const ShopProvider: React.FunctionComponent<ShopState> = ({children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);
    
    
    const addNewProduct = (product: any) => {
        const updatedCart = state.products?.concat(product);
        
        updatePrice(updatedCart, 1);
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
        updatePrice(updatedCart, 1);
        
        dispatch({
            type: ShopStateActionType.SubtractProduct,
            payload: {
                products:  updatedCart
            }
        });
    };

    const updatePrice = (products: Product[] = [], quantity: number ,index?: string ) => {
        let totalCost = 0;
        let InitialIndex = 0;

        products.forEach((product: any) => {
            if(index == product.name){
                totalCost += product.price * quantity;
            }else{
                totalCost += product.price;
            }

        });
       
        state.totalCost = totalCost;
        console.log("Total Cost is " + totalCost);
        dispatch({
            type: ShopStateActionType.UpdatePrice,
            payload: {
                totalCost
                
            }
        });
    };

    const addProductToWishlist = (Wishlist: any) => {
        const updatedCart = state.wishlist?.concat(Wishlist);
        
        updatePrice(updatedCart, 1);
        dispatch({
            type: ShopStateActionType.addProductToWishlist,
            payload: {
                
                wishlist: updatedCart 
            }
        });
    };

    const removeFromWishlist = (Wishlist: any) => {
        const updatedCart = state.wishlist?.filter(
            (currentWishlist: Product) => currentWishlist.name !== Wishlist.name
        );
        
        dispatch({
            type: ShopStateActionType.removeFromWishlist,
            payload: {
                wishlist:  updatedCart
            }
        });
    };

    const updatePriceQuantity = (Product: any, index: any, quantity: number) => {
        const updatedPrice = state.products[index];
        
        if(quantity > 0){
            updatedPrice.price *= quantity;
        }else{
            updatedPrice.price *= 1;
        }
        state.products = updatedPrice
        
    }

    const value = {
        totalCost: state.totalCost,
        products: state.products,
        wishlist: state.wishlist,
        addNewProduct,
        removeFromCart,
        addProductToWishlist,
        removeFromWishlist,
        updatePrice    
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

