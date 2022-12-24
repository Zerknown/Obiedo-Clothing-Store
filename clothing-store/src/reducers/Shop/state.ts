export type ShopState = {
    isInCart?: boolean; 
    totalCost?: number; 
    products?: any //[]
}

export const initialState= {
    isInCart: false, 
    totalCost: 0, 
    products: []
}

//export type ShopState = typeof initialState;