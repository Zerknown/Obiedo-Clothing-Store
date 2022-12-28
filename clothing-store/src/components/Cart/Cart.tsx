
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useShop } from "../../reducers/context/ShopContext";
import { UpdateCart } from "../../reducers/Shop";
import { ProductCard } from "../ProductCard";
import { CheckoutButton, ProductsWrapper, QuantityForm, Title } from "./Cart.styled";

export const Cart = () => {
    const { products, totalCost, checkOutList, updatePrice} = useShop();
    const navigate = useNavigate();
    

    const checkoutPage = () => {
        
        navigate('/checkout');
    }

    const increasePrice = () => {
        
        
    }

    return (
        <>
            <Title>Your cart total is {totalCost}.00$</Title>
            <ProductsWrapper>
                {products.map((product: any) => (
                    <><ProductCard {...product} key={product.id} />
                    <QuantityForm
                        type='number'
                        placeholder='How Many?'
                        key={product.id}
                        onChange={(e) =>  (e.target.value)}  />
                        </>
                ))}
                
            </ProductsWrapper>
            <CheckoutButton onClick={checkoutPage}><p>Checkout</p></CheckoutButton>
        </>
    );
};