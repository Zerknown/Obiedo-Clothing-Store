import styled from 'styled-components';

export const Title = styled.p`
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
`;

export const ProductsWrapper = styled.div`
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(2, auto);
    gap: 20px;
`;

export const QuantityForm = styled.input`
    padding: 0.25;
    padding-left: 1rem;
    background: hsl(210, 36%, 96%);
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border-color: transparent;
    height: 2rem;
    margin-top: 120px;
    font-size: 1rem;
    flex: 1 0 auto;
    color: hsl(210, 22%, 49%);
`

export const CheckoutButton = styled.div`
        position: sticky;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 20px

        width: 50px;
        height: 30px;
        border-radius: 20%;
        padding: 10px;
        cursor: pointer;
        background: green;

        :hover {
            transform: scale(1.2);
            transition: 1s;
        }

        p {
            font-size: 20px;
            margin: 0;
            color: white;
        }
`;