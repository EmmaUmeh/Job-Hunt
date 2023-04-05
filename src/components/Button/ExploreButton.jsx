import styled from "styled-components";

const ExploreStyledButton = styled.button`
border: 1px solid #3083ff;
background: #3083ff;
color: #ffffff;
padding: 20px 50px 20px 50px;
font-family: 'Work Sans', sans-serif;
font-size: 18px;
font-weight: 700;
cursor: pointer;
margin-top: -10px;
border-radius: 5px;
margin-left: 10px;

@media (max-width: 480px) {
    margin-top: 6px;
    margin-left: 0;
}

@media (min-width: 480px) and (max-width: 768px) {
    margin-top: 6px;
    margin-left: 10px;
}
`;

export default function ExploreButton() {
    return(
        <>
        
           <ExploreStyledButton>
                Explore
            </ExploreStyledButton>
            

        </>
    )
}