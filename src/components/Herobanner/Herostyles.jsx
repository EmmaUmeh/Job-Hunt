import styled from "styled-components";
import HeroBg from '../../images/herobg.png';

export const Container = styled.div`
width: 100%;
padding: 55px 20px 20px 20px;
background-image: url(${HeroBg});
background-position:top left;
background-repeat: no-repeat;
height: 100vh;

.getnone{
    display: none;
}



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

/* Small Screen */
@media (max-width: 480px) {
font-size: 40px;
line-height: 60px;
width: 100%;
.getnone{
    display: block;
}
}


@media (min-width: 480px) and (max-width: 768px) {
    font-size: 40px;
    line-height: 60px;
    width: 100%;
    .getnone{
        display: block;
    }
    }
`;

export const HeroHeadingTwo = styled.h1`
font-size: 80px;
display: flex;
justify-content: center;
line-height: 80px;
font-weight: bolder;

@media (max-width: 480px) {
    font-size: 50px;
    margin-top: -10px;
  display: none;
    }

    @media  (min-width: 480px) and (max-width: 768px) {
        font-size: 40px;
        line-height: 60px;
        width: 100%;
        display: none;
        .getnone{
            display: block;
        }
        }
`;

export const HeadingTags = styled.div`
// display: flex;
// justify-content: center;

@media (max-width: 480px) {
   
    }
`;

export const ParagraphContainer = styled.div`
padding-top: 40px;
display: flex;
justify-content: center;
align-items: center;


`;

export const Heroparagraph = styled.div`
width: 65%;

@media (max-width: 480px) {
    width: 100%;
}

@media (min-width: 480px) and (max-width: 768pxpx) {
    width: 100%;
    }
`;

export const Searchspan = styled.span`
margin-left: 260px;

@media (max-width: 480px) {
    margin-left: 0px;
}

@media (min-width: 480px) and (max-width: 768px) {
    margin-left: 100px;
    }
 
`;

export const SearchContainer = styled.div`
// display: flex;
`;