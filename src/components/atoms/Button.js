import styled from "styled-components";

export const Button = styled.button`
    padding: 7px 20px;
    margin: 10px;
    font-size: 15px;
    background-color: #ECEFF7;
    border-radius: 10px;
    border: none;
    color: #737C8E;
    width: 75px;
    height: 50px; 

    &:active {
            box-shadow: 0 1px #ECEFF7;
            transform: translateY(4px);
    }
`;