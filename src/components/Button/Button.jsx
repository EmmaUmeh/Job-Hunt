import styled from "styled-components";

const ButtonStyled = styled.button`
border: 1px solid #ffffff6c;

background: #121212;
color: #ffffff;
padding: 15px 25px 15px 25px;
font-family: 'Work Sans', sans-serif;
font-size: 18px;
font-weight: medium;
cursor: pointer;
margin-top: -10px;
border-radius: 5px;

@media (max-width: 480px) {
    margin-top: 20px;
    padding: 15px 5px 15px 5px;
    width: 50%;
}
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