import styled from "styled-components";

const SearchStyle = styled.input`
border: 1px solid #ffffff6c;
background: #121212;
color: #ffffff;
margin-top: 30px;
font-family: 'Work Sans', sans-serif;
font-size: 18px;
font-weight: meduim;
padding: 20px 400px 20px 20px;

@media (max-width: 480px) {
    padding: 20px 10px 20px 10px;
}

@media (min-width: 480px) and (max-width: 768px) {
    padding: 20px 150px 20px 10px;
}
`;

export default function Search() {
    return(
        <>
            <SearchStyle type="text" placeholder="search jobs or companies" />
        </>
    )
}

