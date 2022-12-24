export type ShopState = {
    totalCost?: number; 
    products?: any ;
    addNewProduct?: any;
    removeFromCart?: any;
    children?: any;
}

export const initialState= {
    totalCost: 0, 
    products: [] ,
    addNewProduct: () => {},
    removeFromCart: () => {},
    children: {},
}

// export type ShopState = typeof initialState;