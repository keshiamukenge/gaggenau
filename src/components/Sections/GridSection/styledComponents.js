import styled from "vue3-styled-components";

import breakpoints from "../../../responsive";

const { s, m, l, xxl } = breakpoints;

export const ContainerGrid = styled.section`
  width: 100%;
  height: fit-content;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin: 10rem 0;
  max-width: ${xxl};

  .el-8 {
    grid-column: 3;
    grid-row: 1;

    h3 {
      bottom: initial;
    }
  }

  @media screen and (max-width: ${s}) {
    margin: 3rem 0;
    grid-template-columns: 1fr 1fr;

    h3 {
      font-size: 18px;
    }

    .el-8 {
      grid-column: 1/3;
      grid-row: 1;

      h3 {
        left: 0;
        font-size: 30px;
        bottom: 10px;
      }
    }

    .el-2 {
      grid-column: 1/3;
      grid-row: 3;
    }

    .el-7 {
      grid-column: 1/3;
      grid-row: 5;
    }
  }

  @media screen and (min-width: ${m}) and (max-width: ${l}) {
    margin: 3rem 0;
    grid-template-columns: 1fr 1fr 1fr;

    h3 {
      font-size: 22px;
    }
  }

  @media screen and (min-width: ${xxl}) {
    margin: 10rem auto;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 48vh;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    visibility: hidden;

    @media screen and (max-width: ${l}) {
      visibility: visible;
    }
  }

  @media screen and (max-width: ${s}) {
    height: 210px;
  }
`;

export const TextContent = styled.h3`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
