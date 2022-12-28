import { Link, Route, Routes } from 'react-router-dom';
import { LinksWrapper, TitleWrapper, Wrapper } from './App.styled';

import { Cart } from '../Cart';
import { Products } from '../Products';
import { ShopProvider } from '../../reducers/context/ShopContext';
import { Wishlist } from '../Wishlist'
import { Checkout } from '../Checkout'


export const App = () => {
    return (
     <ShopProvider>
        <Wrapper>
            <TitleWrapper>
                <h1>Obiedo's Clothing Shop</h1>
            </TitleWrapper>
            <LinksWrapper>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/wishlist'>Wishlist</Link>
            </LinksWrapper>
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlist' element={<Wishlist />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
            </Routes>
        </Wrapper>
     </ShopProvider>
    );
};