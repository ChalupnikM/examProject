
import styled from "styled-components";

export const MiniSuggestion = styled.div`
width: 300px;
height: 25px;
padding: 4px 30px;
border: 1px solid #ECEFF7;
box-sizing: border-box;
box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
border-radius: 10px;
margin-top: 1px;
margin-left: 200px;
font-size: 12px;
`;

export const Suggestion = styled.div`
width: auto;
height: auto;
padding: 1px 20px;
border: 3px solid #ECEFF7;
box-sizing: border-box;
box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
border-radius: 10px;
display: block;
margin: auto;
margin-top: 4px;
font-size: auto;

&:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
}

`;
