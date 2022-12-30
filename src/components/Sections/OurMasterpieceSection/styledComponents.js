import styled from "vue3-styled-components";

import breakpoints from "../../../responsive";

const { s, m, l } = breakpoints;

export const ContainerSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: 0 5%;

  @media screen and (max-width: ${s}) {
    margin-bottom: 5rem;
  }
`;

export const ContainerImage = styled.div`
  width: 40%;
  height: 60vh;
  margin: auto;

  @media screen and (max-width: ${s}) {
    width: 85%;
    margin: auto;
    height: 300px;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    width: 70%;
  }
`;
