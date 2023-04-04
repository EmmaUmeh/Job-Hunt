import styled from "styled-components";

const ButtonStyled = styled.button`
border: 1px solid #ffffff6c;

background: #121212;
color: #ffffff;
padding: 15px 25px 15px 25px;
font-family: 'Work Sans', sans-serif;
font-size: 18px;
font-weight: meduim;
cursor: pointer;
margin-top: -10px;
border-radius: 5px;
`;

export default function Button() {
    return(
        <>
        
           <ButtonStyled>
                Post a Job
            </ButtonStyled>
            

        </>
    )
}