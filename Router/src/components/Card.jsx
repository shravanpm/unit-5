import styled from "styled-components";

export const CardBox = styled.div`
  width: 90%;
  ${'' /* border: 1px solid red; */}
  margin: auto auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10%;
  grid-row-gap: 1%;
  padding: 3%;
`;

export const Card = styled.div`
  display: grid;
  height:400px;
  grid-template-rows: 250px 100px;
  text-align: center;
  
  @div{width:100%,height:100%} 
  @div img{
    height:100%;
  }
  
`;
