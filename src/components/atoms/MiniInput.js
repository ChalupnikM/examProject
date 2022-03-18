import styled from "styled-components";

export const MiniInput = styled.input`
width: auto;
max-width: 500px;
min-width: auto;
height: 40px;
padding: 4px 30px;
border: 1px solid #ECEFF7;
box-sizing: border-box;
box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
border-radius: 10px;
margin-top: 30px;
font-size: 25px;

&:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
}

`;