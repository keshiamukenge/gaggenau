import styled from "vue3-styled-components";
import breakpoints from "../../../responsive";

import { colors } from "@/theme.js";

const { s, m, l, xxl } = breakpoints;

export const ContainerSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.black};
  padding: 10% calc(2rem - 20px) 0 2rem;

  .magazine-image-1,
  .magazine-image-2,
  .magazine-image-3 {
    opacity: 0;
  }

  @media screen and (max-width: ${l}) {
    height: fit-content;
    padding: 2rem;
  }
`;

export const ContainerArrowButton = styled.div`
  width: fit-content;
  height: fit-content;

  @media screen and (max-width: ${s}) {
    grid-row: 1;
    margin-bottom: 2rem;
    width: 100%;

    div {
      width: 100%;

      div {
        width: 100%;
        justify-content: space-between;
      }
    }
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    padding-left: 2rem;
    margin-top: auto;
    margin-bottom: 25px;
  }
`;

export const ContainerContent = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  max-width: ${xxl};

  @media screen and (max-width: ${s}) {
    grid-template-columns: 100%;
    margin: auto;
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${xxl}) {
    margin: auto;
  }
`;
