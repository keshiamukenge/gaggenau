import styled from "vue3-styled-components";

import breakpoints from "../../responsive";

const { m } = breakpoints;

export const ContainerSvg = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: 1.2rem;

  @media screen and (max-width: ${m}) {
    margin-right: 1.2rem;
    margin-left: 0;
  }
`;
