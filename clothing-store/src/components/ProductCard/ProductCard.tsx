import {
    AddButton,
    SubTitle,
    TextContainer,
    Title,
    WishListButton,
    Wrapper,
} from './ProductCard.styled';

import { Product } from '../../models';
import {  initialState, shopReducer } from '../../reducers/Shop';
import { useEffect, useReducer, useState } from 'react';
import { useShop } from '../../reducers/context/ShopContext';






export const ProductCard = ({ name, imageUrl, price }: Product) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);
    const [isInCart, setisInCart] = useState(false);
    const [WishlistState, setWishlist] = useState(false);
    const {addNewProduct, removeFromCart, products, wishlist, addProductToWishlist, removeFromWishlist} = useShop();


    useEffect(() => {
      const productIsInCart = products.find((product: Product) => (product.name === name));
      const productIsInWishlist = wishlist.find((wishlist: Product) => (wishlist.name === name));

      if(productIsInWishlist) {
        setWishlist(true);
      }else {
        setWishlist(false);
      }

      if (productIsInCart){
        setisInCart(true);
      } else {
        setisInCart(false);
      }
    }, [wishlist, products, name]);
    

    const handleClick = () => {
        const product = { name, imageUrl, price};

        if (isInCart){
            removeFromCart(product);
        }else {
            addNewProduct(product);
        }
        
    }

    const handleWishlist = () => {
        const wishlist = { name, imageUrl, price};

        if (WishlistState) {
            removeFromWishlist(wishlist);
        }else {                       
            addProductToWishlist(wishlist);
        }
    }

    return(
    <Wrapper background={imageUrl}>
        <WishListButton isWishListed={WishlistState} style={{ color: WishlistState ? '#60c95d' : '#555555'}} onClick={handleWishlist}>
        <p>{WishlistState ? 'Wishlisted' : 'Wishlist'}</p>
        </WishListButton>
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

