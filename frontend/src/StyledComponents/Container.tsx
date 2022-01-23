import styled from "styled-components";

export const flex = styled.div`
  display: flex;
`;

export const Container = styled(flex)`
  /* justify-content: center; */
  /* align-items: center; */
  /* flex-direction: column; */
  padding: 30px 15px;
  font-family: "Montserrat";
  color: white;
  flex-wrap: wrap;
`;

export const ContainerColum = styled(Container)`
  flex-direction: column;
`;

export const SpaceBetweenItem = styled(Container)`
  justify-content: space-between;
`;
