import styled from "styled-components";


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

export const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 40px 40px 20px 20px;
background: none;
flex-wrap: wrap;

@media (max-width: 768px) {
background: #161616;

}

@media (min-width: 768px) and (max-width: 900px) {
background: #161616;

}
`;

// export const ListContainer = styled.div`

// `;

export const ListUrl = styled.div`
   display: flex;
   align-items: center;
   position: relative;

   /* display: none; */
@media (max-width: 768px) {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 10px 5px 5px 5px;
    width: 100%;
   height: ${({toggle}) => (toggle ? '50vh' : '0')};
   transition: height 0.3s ease-in;
   
}

@media (min-width: 768px) and (max-width: 900px) {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 10px 5px 5px 5px;
    width: 100%;
   height: ${({toggle}) => (toggle ? '50vh' : '0')};
   transition: height 0.3s ease-in;

}

/* Meduim Screen */


`;

export const HomeUrl = styled.a`
margin-right: 90px;
// padding-right: 90px;
color: white;
font-weight: 600;

@media (max-width: 768px) {
    margin-right: 0px;
    margin-top: 20px;
}

@media (min-width: 768px) and (max-width: 900px) {
    margin-right: 0px;
    margin-top: 20px;
    padding-bottom: 10px;
}
`;


export const BlogUrl = styled.div`
margin-right: 90px;
color: white;
font-weight: 600;

@media (max-width: 768px) {
    margin-right: 0px;

}

@media (min-width: 768px) and (max-width: 900px) {
    margin-right: 0px;
    padding-bottom: 10px;
}
`;

export const PagesUrl = styled.div`
margin-right: 90px;
color: white;
font-weight: 600;

@media (max-width: 768px) {
    margin-right: 0px;

}

@media (min-width: 768px) and (max-width: 900px) {
    margin-right: 0px;
    padding-bottom: 10px;

}
`;

export const CartUrl = styled.div`
margin-right: 20px;
color: white;
font-weight: 600;


@media (max-width: 768px) {
    margin-right: 0px;
}

@media (min-width: 768px) and (max-width: 900px) {
    margin-right: 0px;
    padding-bottom: 20px;

}
`;

export const ToggleButton = styled.button`
background: transparent;
color: white;
outline: none;
border: none;
cursor: pointer;
/* flex-direction: column; */
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

 @media (min-width: 768px) and (max-width: 900px) {
    display: block;
    z-index: 1;

}
`