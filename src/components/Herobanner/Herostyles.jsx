import styled from "styled-components";
import HeroBg from '../../images/herobg.png'
export const Container = styled.div`
width: 100%;
padding: 55px 20px 20px 20px;
background-image: url(${HeroBg});
background-position:top left;
background-repeat: no-repeat;
height: 100vh;
`;

export const Flex = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 6px;
`;

export const HeroHeadingOne = styled.h1`
font-size: 80px;

line-height: 80px;
font-weight: bolder;
`;

export const HeroHeadingTwo = styled.h1`
font-size: 80px;
display: flex;
justify-content: center;
line-height: 80px;
font-weight: bolder;
`;

export const HeadingTags = styled.div`

`;

export const ParagraphContainer = styled.div`
padding-top: 40px;
display: flex;
justify-content: center;
align-items: center;
`;

export const Heroparagraph = styled.div`
width: 65%;

`;

export const Searchspan = styled.span`
margin-left: 260px;
`;

export const SearchContainer = styled.div`
// display: flex;
`;