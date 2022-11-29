import styled from "vue3-styled-components";

export const ContainerImage = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export const SectionElement = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  padding: 1.5rem 5% 0 5%;
`;

export const SmallParagraph = styled.p`
  text-transform: uppercase;
  width: 15%;
`;

export const Heading1 = styled.h1`
  width: 100%;
  margin-bottom: 1rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;
