import styled from "vue3-styled-components";

import breakpoints from "../../../responsive";

const { s, m, l } = breakpoints;

export const ContainerSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: 0 2rem;

  .masterpiece-image {
    opacity: 0;
  }

  @media screen and (max-width: ${s}) {
    margin-bottom: 5rem;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: auto;
  margin: auto;

  img {
    grid-column: 2/4;
  }

  @media screen and (max-width: ${s}) {
    display: flex;
    width: 100%;
    margin: auto;
    height: 300px;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    display: flex;
    width: 48%;
  }
`;
