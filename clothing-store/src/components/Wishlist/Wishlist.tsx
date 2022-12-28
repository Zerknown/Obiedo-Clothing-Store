import { useShop } from "../../reducers/context/ShopContext";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductsWrapper, Title } from "./Wishlist.styled";


export const Wishlist = () => {
    const { wishlist, totalCost} = useShop();

    console.log(totalCost + " Price");
    return (
        <>
            <Title>User's Wishlist</Title>
            <ProductsWrapper>
                {wishlist.map((product: any, index: number) => (
                    <ProductCard {...product} key={index} />
                ))}
            </ProductsWrapper>
        </>
    );
};