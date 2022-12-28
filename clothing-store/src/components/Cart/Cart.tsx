
import { Navigate, useNavigate } from "react-router-dom";
import { useShop } from "../../reducers/context/ShopContext";
import { ProductCard } from "../ProductCard";
import { CheckoutButton, ProductsWrapper, QuantityForm, Title } from "./Cart.styled";

export const Cart = () => {
    const { products, totalCost} = useShop();
    const navigate = useNavigate();
    
    const checkoutPage = () => {
        navigate('/checkout');
    }

    return (
        <>
            <Title>Your cart total is {totalCost}.00$</Title>
            <ProductsWrapper>
                {products.map((product: any, index: number) => (
                    <><ProductCard {...product} key={index} />
                    <QuantityForm
                        type='number'
                        placeholder='How Many?' />
                        </>
                ))}
                
            </ProductsWrapper>
            <CheckoutButton onClick={checkoutPage}><p>Checkout</p></CheckoutButton>
        </>
    );
};