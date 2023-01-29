import styled from "vue3-styled-components";
import breakpoints from "../../../responsive";

const { s, m, l } = breakpoints;

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
  padding: 1.5rem 2rem 0 2rem;
`;

export const SmallParagraph = styled.p`
  text-transform: uppercase;
  width: 15%;

  @media screen and (max-width: ${s}) {
    width: auto;
    margin-left: 50%;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    width: 30%;
  }
`;

export const ContainerLogoText = styled.div`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 27px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;

  @media screen and (max-width: ${s}) {
    display: block;

    .hero-button {
      position: absolute;
      bottom: 25px;
      left: 2rem;
      right: 2rem;

      div {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
