import styled from "vue3-styled-components";

import breakpoints from "../../../responsive";

const { s, m, l } = breakpoints;

export const ContainerSection = styled.section`
  width: 100%;
  height: 80vh;
  margin: 15rem 0;
  padding: 0 2rem;
  display: flex;

  .art-kitchen-image {
    opacity: 0;
  }

  .art-kitchen-title {
    opacity: 0;
    transform: translateY(50px);
  }

  @media screen and (max-width: ${s}) {
    display: block;

    .art-kitchen-text {
      width: 100%;
      height: fit-content;
      margin-bottom: 2rem;
    }

    .art-kitchen-image {
      width: 85%;
      margin: auto;
      height: 300px;
    }
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    display: block;

    .art-kitchen-text {
      width: 100%;
      height: fit-content;
      margin-bottom: 2rem;
    }

    .art-kitchen-image {
      width: 85%;
      margin: auto;
      height: 300px;
    }
  }
`;

export const ContainerTextPart = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 30%;
  padding: 0 10%;

  @media screen and (max-width: ${s}) {
    padding: 0%;
  }
`;

export const ContainerPart = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

export const ContainerTextButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
  padding-left: 30%;
  padding-right: 10%;

  @media screen and (max-width: ${s}) {
    padding-right: 0;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    padding-left: 50%;
    padding-right: 0;
  }
`;

export const TextElement = styled.p`
  color: ${props => props.theme.color};
  margin-bottom: 2rem;
`;
