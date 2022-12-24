import {
    AddButton,
    SubTitle,
    TextContainer,
    Title,
    Wrapper,
} from './ProductCard.styled';

import { Product } from '../../models';
import { setIsAddedColor, shopReducer } from '../../reducers/Shop';
import { useReducer, useState } from 'react';




export const ProductCard = ({ name, imageUrl, price }: Product) => {
    const [state, dispatch] = useReducer(shopReducer, {});
    const { isInCart } = state;
    const [insideCard, setinsideCard] = useState(false);

    const checking = () => {
        
        if (insideCard){
            setinsideCard(false);
        }else {
            setinsideCard(true);
        }
        dispatch(setIsAddedColor());
        console.log("check 1");
    }

    return(
    <Wrapper background={imageUrl}>
        <AddButton isInCart={insideCard} style={{ color: isInCart ? '#E55336' : '#60c95d'}} onClick={checking}>
            <p>{isInCart ? '-' : '+'}</p>
        </AddButton>
        <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
        </TextContainer>
    </Wrapper>
    );
};

