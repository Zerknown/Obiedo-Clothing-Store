import { useShop } from "../../reducers/context/ShopContext";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Checkout.styled";


export const Checkout = () => {
    const { products, totalCost} = useShop();

    
    return (
        <>
            <Title>Thank you for buying. Your cart total is {totalCost}.00$</Title>
            <ProductsWrapper>
                {products.map((product: any, index: number) => (
                    <ProductCard {...product} key={index} />                 
                ))}
            </ProductsWrapper>
        </>
    );
};