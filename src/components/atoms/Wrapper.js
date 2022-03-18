import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
height: auto;
min-height: 200px;

`;

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
  height: 300px;
  text-align: center;
  
`;
export const MiniWrapper = styled.div`
display: flex;
flex-direction: rows;
justify-content: center;
`;

export const Img = styled.div`
max-width: 350px;
max-height: 500px;
border-radius: 30px;
`

export const GridWrapper = styled.div`
margin: auto;
background: rgba(255, 255, 255, 0.2);
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
padding: 40px;
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 50px;
align-items: center;
max-width: 800px;
`


export const GalleryWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax( 400px, 1fr));
grid-gap: 30px;
`

export const ModalWrapper = styled.div`
  margin: 30px auto;
  background-color: #FFFFFF;
  width: 90%;
  max-width: 800px;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  border: 1px solid #000000;
`;
