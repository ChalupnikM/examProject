// import React from 'react';
// import { MiniInput } from '../atoms/MiniInput';
// import { Wrapper } from '../atoms/Wrapper';
// import { Button } from '../atoms/Button';

// const Suggestion = ({ onSubmit, }) => {
//     return (
//         key={priority} onSubmit={onSubmit}>{fuzzy.query}
//     );
// };

// export default Suggestion;
import styled from "styled-components";
export const Suggestion = styled.div`
width: auto;
height: 30px;
padding: 4px 40px;
border: 1px solid #ECEFF7;
box-sizing: border-box;
box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
border-radius: 10px;
display: block;
margin: auto;
font-size: 11px;

&:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
}

`;