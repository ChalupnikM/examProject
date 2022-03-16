import styled from "styled-components";

export const MiniInput = styled.input`
width: 300px;
height: 30px;
padding: 7px 50px;
border: 1px solid #ECEFF7;
box-sizing: border-box;
box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
border-radius: 10px;
display: block;
margin: auto;
font-size: 20px;

&:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
}

`;