import styled from "vue3-styled-components";

import breakpoints from "../../../responsive";

const { s, m, l, xxl } = breakpoints;

export const ContainerSection = styled.section`
  width: 100%;
  height: 80vh;
  margin: 15rem 0;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: max-content;
  max-width: ${xxl};

  img {
    grid-row: 1/3;
    grid-column: 3/5;
  }

  h2 {
    grid-column: 1/3;
    padding-left: 4rem;
    padding-bottom: 2rem;
    margin-top: auto;
    max-width: 500px;
    text-align: left;
  }

  .art-kitchen-image {
    opacity: 0;
  }

  .art-kitchen-title {
    opacity: 0;
    transform: translateY(50px);
  }

  @media screen and (max-width: ${s}) {
    display: block;
    margin: 15rem 0 0 0;
    height: fit-content;

    h2 {
      padding-left: 0;
      margin-bottom: 1rem;
    }

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
    text-align: center;
    margin: 15rem 0 8rem 0;

    h2 {
      margin-bottom: 2rem;
    }

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

  @media screen and (min-width: ${xxl}) {
    margin: 15rem auto;
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
  width: 60%;
  height: fit-content;
  position: relative;
  grid-column: 1/3;
  grid-row: 2;
  margin-left: auto;
  padding-right: 4rem;

  @media screen and (max-width: ${s}) {
    margin-left: initial;
    width: 100%;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    margin-bottom: 2rem;
    width: 60%;
    margin-left: 25%;
  }
`;

export const ContainerTextButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: ${s}) {
    padding-right: 0;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    padding-right: 4rem;
  }
`;

export const TextElement = styled.p`
  color: ${props => props.theme.color};
  margin-bottom: 2rem;
`;
