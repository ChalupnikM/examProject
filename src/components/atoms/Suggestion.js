
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
width: 300px;
height: 30px;
padding: 1px 40px;
border: 3px solid #ECEFF7;
box-sizing: border-box;
box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
border-radius: 10px;
display: block;
margin: auto;
margin-top: 5px;
font-size: 15px;

&:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
}

`;
