import styled from "styled-components";

export const MiniButton = styled.button`
font-size: 14px;
background-color: #ECEFF7;
border-radius: 10px;
border: none;
color: #737C8E;
width: 55px;
height: 40px;
padding: 4px 3px;
margin-top: 10px;

&:active {
    box-shadow: 0 1px #ECEFF7;
    transform: translateY(4px);
}
`;

export const Button = styled.button`
font-size: 14px;
background-color: #ECEFF7;
border-radius: 10px;
border: none;
color: #737C8E;
width: 60px;
height: 50px;
padding: 4px 3px;
margin-top: 10px;
border: 1px solid #ECEFF7;
box-sizing: border-box;
box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

&:active {
    box-shadow: 0 1px #ECEFF7;
    transform: translateY(4px);
}
`;