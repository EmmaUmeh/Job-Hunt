import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 35px 20px 20px 20px;
`;

export const LogoUrl = styled.div`
width: 15%;

/* Small Screen */
@media (max-width: 480px) {
width: 50%;
z-index: 1;
}

/* Meduim Screen */
@media (min-width: 480px) and (max-width: 768px) {
    width: 50%;
    z-index: 1;
    }
`;

export const Flex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

// export const ListContainer = styled.div`

// `;

export const ListUrl = styled.div`
display: flex;

@media (max-width: 480px) {
    display: ${props => props.primary ? 'none' : 'block'};
    position: fixed;
    top: 0;
    left: 0;
    padding: 80px 5px 20px 25px;
    background: #121212;
    width: 100%;
}

/* Meduim Screen */
@media (min-width: 480px) and (max-width: 768px) {
    display: ${props => props.primary ? 'none' : 'block'};
    position: fixed;
    top: 0;
    left: 0;
    padding: 80px 5px 20px 25px;
    background: #121212;
    width: 100%;
 }

`;

export const HomeUrl = styled.a`
margin-right: 90px;
// padding-right: 90px;
color: white;
font-weight: 600;
`;


export const BlogUrl = styled.div`
margin-right: 90px;
color: white;
font-weight: 600;
`;

export const PagesUrl = styled.div`
margin-right: 90px;
color: white;
font-weight: 600;
`;

export const CartUrl = styled.div`
margin-right: 20px;
color: white;
font-weight: 600;
`;

export const ToggleButton = styled.button`
background: transparent;
color: white;
outline: none;
border: none;
cursor: pointer;
display: none;

@media (max-width: 480px) {
    display: block;
    z-index: 1;
}

/* Meduim Screen */
@media (min-width: 480px) and (max-width: 768px) {
    display: block;
    z-index: 1;
    
 }

`