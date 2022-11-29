import styled from "vue3-styled-components";

export const ContainerGrid = styled.section`
  width: 100%;
  height: fit-content;
  padding: 0 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin: 10rem 0;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 48vh;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export const TextContent = styled.h3`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
