import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// export const GridWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `

// export const GalleryWrapper = styled.div`
// max-width: 100px;
// max-height: 100px
// height: 100px;
// padding-top: 3.2rem;
// padding-left: rem;
// display: grid;
// grid-template-columns: repeat(2, 8rem);
// margin-bottom: 5 rem;
// `;

export const Img = styled.div`
max-width: 300px;
max-height: 500px;
`

export const GridWrapper = styled.div`
background: rgba(255, 255, 255, 0.2);
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
padding: 20px;
display: grid;
grid-template-columns: 400px 1fr;
grid-gap: 50px;
align-items: center;
`


export const GalleryWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 20px;
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
