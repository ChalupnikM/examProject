import styled from "styled-components";

export const MiniInput = styled.input`

width: auto;
max-width: 500px;
height: 50px;
padding: 7px auto;
border: 1px solid #ECEFF7;
box-sizing: border-box;
box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
border-radius: 10px;
display: block;
margin-top 10px;
font-size: 20px;

&:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
}

`;