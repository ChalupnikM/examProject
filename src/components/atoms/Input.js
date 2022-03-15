import styled from "styled-components";

export const Input = styled.input`
width: 700px;
height: 50px;
padding: 7px 50px;
border: 1px solid #ECEFF7;
box-sizing: border-box;
box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
border-radius: 10px;
display: block;
margin: auto;
font-size: 30px;

&:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
}

`;