import {
    AddButton,
    SubTitle,
    TextContainer,
    Title,
    Wrapper,
} from './ProductCard.styled';

import { Product } from '../../models';
import {  initialState, shopReducer } from '../../reducers/Shop';
import { useEffect, useReducer, useState } from 'react';
import { useShop } from '../../reducers/Shop/context/ShopContext';





export const ProductCard = ({ name, imageUrl, price }: Product) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);
    const [isInCart, setisInCart] = useState(false);
    const {addNewProduct, removeFromCart, products} = useShop();

    useEffect(() => {
      const productIsInCart = products.find((product: Product) => (product.name === name));
    
      if (productIsInCart){
        setisInCart(true);
      } else {
        setisInCart(false);
      }
    }, [products, name])
    

    const handleClick = () => {
        const product = { name, imageUrl, price};

        if (isInCart){
            removeFromCart(product);
        }else {
            addNewProduct(product);
        }
        
    }

    return(
    <Wrapper background={imageUrl}>
        <AddButton isInCart={isInCart} style={{ color: isInCart ? '#E55336' : '#60c95d'}} onClick={handleClick}>
            <p>{isInCart ? '-' : '+'}</p>
        </AddButton>
        <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
        </TextContainer>
    </Wrapper>
    );
};

